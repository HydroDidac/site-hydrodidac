// Worker d'authentification GitHub pour Decap CMS.
// Implémente le protocole OAuth attendu par le backend "github" de Decap CMS :
// /auth -> redirige vers GitHub ; /callback -> échange le code contre un token
// et le renvoie à la fenêtre du CMS via postMessage.

const GITHUB_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const GITHUB_TOKEN_URL = "https://github.com/login/oauth/access_token";

function randomState() {
  return crypto.randomUUID();
}

async function handleAuth(request, env) {
  const url = new URL(request.url);
  const scope = url.searchParams.get("scope") || "repo,user";
  const state = randomState();

  const redirectUri = new URL("/callback", url).toString();
  const authorizeUrl = new URL(GITHUB_AUTHORIZE_URL);
  authorizeUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", scope);
  authorizeUrl.searchParams.set("state", state);

  return Response.redirect(authorizeUrl.toString(), 302);
}

function renderCallbackPage(success, payload) {
  const status = success ? "success" : "error";
  const message = JSON.stringify(payload);
  const html = `<!doctype html>
<html><body>
<script>
  (function () {
    function receiveMessage(e) {
      window.opener.postMessage(
        'authorization:github:${status}:${message}',
        e.origin
      );
      window.removeEventListener("message", receiveMessage, false);
    }
    window.addEventListener("message", receiveMessage, false);
    window.opener.postMessage("authorizing:github", "*");
  })();
</script>
</body></html>`;
  return new Response(html, { headers: { "content-type": "text/html;charset=UTF-8" } });
}

async function handleCallback(request, env) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

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
