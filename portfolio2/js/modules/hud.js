export function initHUD() {                                                 //Export
    document.querySelectorAll(".hud-window").forEach(windowEl => {          //Cible toutes les fenêtres : <div class="hud-window">...</div>

        let isDragging = false;                                             //Servent à gérer le déplacement / Explication :
        let offsetX, offsetY;                                               //isDragging → est-ce qu’on est en train de déplacer ? 
                                                                            //offsetX/Y → décalage entre souris et coin de la fenêtre
        const header = windowEl.querySelector(".hud-header");               //Récupération du header
        if (!header) return;                                                //on ne peut déplacer que via le header / sécurité si pas trouvé

        header.style.cursor = "move";                                       //Curseur visuel : change le curseur → UX claire

        header.addEventListener("mousedown", (e) => {                       //Début du drag : déclenché quand tu cliques
            isDragging = true;                                              //Activation du drag : on commence à déplacer

            offsetX = e.clientX - windowEl.offsetLeft;                      //Calcul du décalage pour éviter que la fenêtre “saute” / Exemple : Si tu cliques au milieu
            offsetY = e.clientY - windowEl.offsetTop;                       //sans offset → la fenêtre saute au coin / avec offset → elle suit correctement

            windowEl.style.position = "absolute";                           //Permet de déplacer librement
            windowEl.style.zIndex = 1000;                                   //Passe au-dessus des autres fenêtres

            document.body.style.userSelect = "none";                        //Désactiver sélection texte sinon tu sélectionnes du texte en bougeant
        });

        document.addEventListener("mousemove", (e) => {                     //DÉPLACEMENT : déclenché en continu
            if (!isDragging) return;                                        //Sécurité : ne bouge que si drag actif

            windowEl.style.left = (e.clientX - offsetX) + "px";             //Nouvelle position : suit la souris
            windowEl.style.top = (e.clientY - offsetY) + "px";              //Résultat : déplacement fluide 
        });

        document.addEventListener("mouseup", () => {                        //FIN DU DRAG : quand on relâche
            isDragging = false;                                             //stop déplacement
            document.body.style.userSelect = "auto";                        //réactive sélection texte
        });

    });
}