export function initSound() {                                   //Export
    const hoverSound = document.getElementById("hoverSound");   //Récupération des sons - correspond à :
    const clickSound = document.getElementById("clickSound");   //<audio id="hoverSound"></audio> et <audio id="clickSound"></audio>

    document.querySelectorAll("button, a").forEach(el => {      //Sélection des éléments interactifs - cible : boutons et liens

        el.addEventListener("mouseenter", () => {               //Hover - Explication : 
            if (hoverSound) {
                hoverSound.currentTime = 0;                     //currentTime = 0 → remet le son au début
                hoverSound.play();                              //play() → joue le son
            }                                                   //permet de rejouer rapidement le son
        });

        el.addEventListener("click", () => {                    //Click - même logique
            if (clickSound) {
                clickSound.currentTime = 0;
                clickSound.play();
            }
        });

    });

    document.addEventListener("click", () => {                  //Activation audio (IMPORTANT) - les navigateurs bloquent les sons automatiques
        if (hoverSound) hoverSound.volume = 0.2;                //il faut une interaction utilisateur / ici :
        if (clickSound) clickSound.volume = 0.3;                //premier clic → active les sons
    }, { once: true });                                         //{ once: true } → une seule fois
}