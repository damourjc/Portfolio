export function initParticles() {                           //Export
    const canvas = document.getElementById("particles");    //Récupération canvas : 
    if (!canvas) return;                                    //sécurité : si pas de canvas → on arrête

    const ctx = canvas.getContext("2d");                    //Contexte 2D : permet de dessiner, ctx = “pinceau”

    canvas.width = window.innerWidth;                       //Taille canvas : prend toute la taille écran
    canvas.height = window.innerHeight;                     //canvas ≠ CSS , il faut définir largeur/hauteur en JS

    let particles = [];                                     //Tableau de particules : stocke toutes les particules

    for (let i = 0; i < 80; i++) {                          //Création : crée 80 particules
        particles.push({
            x: Math.random() * canvas.width,                //position X aléatoire
            y: Math.random() * canvas.height,               //position Y aléatoire
            size: Math.random() * 2,                        //taille aléatoire
            speedX: Math.random() - 0.5,                    //vitesse aléatoire (dans tous les sens)
            speedY: Math.random() - 0.5                     //Math.random() - 0.5 : valeur entre -0.5 et +0.5
        });
    }

    function animate() {                                    //Animation : boucle infinie
        ctx.clearRect(0, 0, canvas.width, canvas.height);   //Effacer écran : nettoie le canvas à chaque frame

        particles.forEach(p => {                            //Mise à jour particules
            p.x += p.speedX;                                //Déplacement : 
            p.y += p.speedY;                                //chaque particule bouge

            ctx.fillStyle = "#00f0ff";                    //Style : couleur cyan
            ctx.beginPath();                                
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);      //Dessin cercle : explication : arc() = cercle, Math.PI * 2 = cercle complet
            ctx.fill();
        });

        requestAnimationFrame(animate);                     //Boucle infinie : rappelle la fonction, équivalent : “boucle infinie optimisée”
    }

    animate();                                              //Lancement : démarre l’animation
}