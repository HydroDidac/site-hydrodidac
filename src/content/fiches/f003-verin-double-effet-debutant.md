---
code: "F003"
titre: "Vérin double effet — force, vitesse, surface annulaire"
niveau: "debutant"
module: "Vérins hydrauliques"
resume: "Le vérin double effet est poussé ET tiré par l'huile : pas besoin de ressort. Comprendre pourquoi il pousse plus fort qu'il ne tire, mais tire plus vite."
tempsLecture: 3
ficheLiees: ["F004", "F005"]
datePublication: 2026-06-28
formulesClefs:
  - "Force = Pression × Surface"
securite: "Ne jamais dépasser la pression maximale indiquée sur la plaque du vérin. Sur les grandes courses, attention au risque de flexion (comme une canne à pêche qui plie si on appuie trop fort sur un bâton trop long et trop fin)."
---

## Principe de fonctionnement
Imaginez une seringue avec deux entrées : si vous poussez l'eau d'un côté, le piston avance ; si vous poussez de l'autre côté, il recule. C'est exactement le principe du vérin double effet. À l'intérieur du tube, un piston sépare deux chambres. Quand l'huile arrive dans la chambre arrière, elle pousse le piston et la tige sort. Quand on envoie l'huile dans la chambre avant (côté tige), la tige rentre. Une vanne appelée distributeur permet d'envoyer l'huile d'un côté ou de l'autre selon le mouvement voulu.

Pas de panique avec les formules — l'idée à retenir : **plus la surface sur laquelle pousse l'huile est grande, plus la force est grande.** À l'arrière du piston, toute la surface ronde est disponible. À l'avant, il manque la place prise par la tige, donc la surface est plus petite (on l'appelle la « surface annulaire », en forme d'anneau). Conséquence pratique : un vérin pousse plus fort qu'il ne tire, mais il tire plus vite qu'il ne pousse (pour le même débit d'huile). Par exemple avec une pression de 200 bar et une surface de 50 cm², on obtient environ 10 tonnes de force.

## Exemples concrets (terrain)
Un vérin de benne de camion doit pousser très fort pour soulever la benne chargée : on privilégie la force, donc le mouvement de sortie (poussée). Un vérin de retour rapide sur une machine (par exemple pour ramener un outil en position) profite du fait que le retrait est plus rapide.

## Erreurs fréquentes
- Confondre la force en poussée et la force en traction : elles ne sont pas égales !
- Oublier qu'un vérin qui descend une charge lourde peut « s'emballer » si rien ne freine sa vitesse.
- Négliger l'usure des joints, qui fait perdre de la force sans qu'on s'en rende compte tout de suite.

## Glossaire — mots à connaître

| Terme | Explication simple |
|---|---|
| Piston | Disque qui coulisse dans le tube et sépare les deux chambres |
| Tige | Barre qui sort du vérin et transmet le mouvement |
| Surface annulaire | Surface en forme d'anneau, côté tige, plus petite que la surface pleine côté fond |
| Distributeur | Vanne qui dirige l'huile vers l'avant ou l'arrière du vérin |
| Course | Distance maximale que peut parcourir la tige |
| Pression nominale | Pression maximale d'utilisation prévue par le fabricant |
