export function initCards() {                                               //Rend la fonction utilisable dans main.js
    document.querySelectorAll(".card").forEach(card => {                    //Sélectionne toutes les cartes : <div class="card">...</div> 
                                                                            //forEach : applique le code à chaque carte
        card.addEventListener("mousemove", (e) => {                         //Déclenché quand la souris bouge sur la carte
            const rect = card.getBoundingClientRect();                      //Récupère : position X/Y, largeur, hauteur / Comme une boîte invisible autour de la carte

            const x = e.clientX - rect.left;                                //Transforme : position écran → position locale
            const y = e.clientY - rect.top;                                 //Exemple : souris à gauche → x petit / souris à droite → x grand

            const rotateX = -(y - rect.height / 2) / 10;                    //Cœur de l’effet 3D / Centre de la carte : rect.height / 2, rect.width / 2
            const rotateY = (x - rect.width / 2) / 10;                      //Si souris : en haut → rotation vers le haut / en bas → rotation vers le bas
                                                                            //Division par 10 : réduit l’intensité (sinon trop violent) / Résultat : effet "inclinaison 3D"
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`; //Applique la rotation CSS
        });                                                                         //Equivalent CSS : transform: rotateX(...) rotateY(...);

        card.addEventListener("mouseleave", () => {                         //Quand la souris quitte la carte
            card.style.transform = "rotateX(0) rotateY(0)";                 //Remet à zéro
        });                                                                 //Résultat : la carte revient normale

    });                                                                     //Effet final : carte interactive 3D
}