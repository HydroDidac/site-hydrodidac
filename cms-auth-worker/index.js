// Worker d'authentification GitHub pour Decap CMS.
// Implémente le protocole OAuth attendu par le backend "github" de Decap CMS :
// /auth -> redirige vers GitHub ; /callback -> échange le code contre un token
// et le renvoie à la fenêtre du CMS via postMessage.
//
// Le paramètre "state" est stocké dans un cookie signé temporaire (httpOnly,
// secure, 10 min) à l'étape /auth, puis vérifié à l'étape /callback : c'est
// la protection standard contre les attaques CSRF sur ce flux OAuth.

const GITHUB_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const GITHUB_TOKEN_URL = "https://github.com/login/oauth/access_token";
const STATE_COOKIE = "oauth_state";

// Seules ces origines ont le droit de recevoir le token GitHub via postMessage.
// Sans cette liste, n'importe quelle page ayant ouvert la popup pourrait
// récupérer le token en envoyant le premier message.
const ALLOWED_ORIGINS = [
  "https://hydrodidac.com",
  "https://site-hydrodidac.pages.dev",
];

// Scopes OAuth acceptés — tout autre valeur passée en paramètre est ignorée.
const ALLOWED_SCOPES = ["repo", "repo,user", "public_repo"];

function randomState() {
  return crypto.randomUUID();
}

function getCookie(request, name) {
  const cookieHeader = request.headers.get("Cookie") || "";
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? match[1] : null;
}

async function handleAuth(request, env) {
  const url = new URL(request.url);
  const requestedScope = url.searchParams.get("scope");
  const scope = ALLOWED_SCOPES.includes(requestedScope) ? requestedScope : "repo,user";
  const state = randomState();

  const redirectUri = new URL("/callback", url).toString();
  const authorizeUrl = new URL(GITHUB_AUTHORIZE_URL);
  authorizeUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", scope);
  authorizeUrl.searchParams.set("state", state);

  const headers = new Headers({ Location: authorizeUrl.toString() });
  headers.append(
    "Set-Cookie",
    `${STATE_COOKIE}=${state}; HttpOnly; Secure; SameSite=Lax; Max-Age=600; Path=/callback`
  );

  return new Response(null, { status: 302, headers });
}

function renderCallbackPage(success, payload) {
  const status = success ? "success" : "error";
  const message = JSON.stringify(payload);
  const allowedOrigins = JSON.stringify(ALLOWED_ORIGINS);
  const html = `<!doctype html>
<html><body>
<script>
  (function () {
    var ALLOWED_ORIGINS = ${allowedOrigins};
    function receiveMessage(e) {
      // Ne jamais remettre le token à une origine inconnue : seul le site
      // HydroDidac (fenêtre parente légitime du CMS) peut le recevoir.
      if (ALLOWED_ORIGINS.indexOf(e.origin) === -1) return;
      window.opener.postMessage(
        'authorization:github:${status}:${message}',
        e.origin
      );
      window.removeEventListener("message", receiveMessage, false);
    }
    window.addEventListener("message", receiveMessage, false);
    // Le message d'amorce ne contient aucun secret : on le cible quand même
    // uniquement vers les origines autorisées.
    ALLOWED_ORIGINS.forEach(function (origin) {
      window.opener.postMessage("authorizing:github", origin);
    });
  })();
</script>
</body></html>`;
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
      // Le cookie de state n'a plus d'utilité une fois le callback traité.
      "Set-Cookie": `${STATE_COOKIE}=; HttpOnly; Secure; SameSite=Lax; Max-Age=0; Path=/callback`,
    },
  });
}

async function handleCallback(request, env) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const expectedState = getCookie(request, STATE_COOKIE);

  if (!state || !expectedState || state !== expectedState) {
    return renderCallbackPage(false, { error: "invalid_state" });
  }

  if (!code) {
    return renderCallbackPage(false, { error: "missing_code" });
  }

  const tokenResponse = await fetch(GITHUB_TOKEN_URL, {
    method: "POST",
    headers: { "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenResponse.json();

  if (tokenData.error || !tokenData.access_token) {
    return renderCallbackPage(false, tokenData);
  }

  return renderCallbackPage(true, { token: tokenData.access_token, provider: "github" });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/auth") return handleAuth(request, env);
    if (url.pathname === "/callback") return handleCallback(request, env);

    return new Response("HydroDidac CMS auth worker — endpoints: /auth, /callback", {
      status: 200,
    });
  },
};
