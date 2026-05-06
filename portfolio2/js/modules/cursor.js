export function initCursor() {                                              //Export
    const cursor = document.querySelector(".cursor");                       //Récupère : <div class="cursor"></div>
    if (!cursor) return;                                                    //Sécurité : évite les erreurs si absent

    document.addEventListener("mousemove", (e) => {                         //Déclenché partout
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";                                //Déplace le curseur, clientX / clientY : position réelle de la souris
    });

    document.querySelectorAll("button, .card").forEach(el => {              //Cible : boutons, cartes
        el.addEventListener("mouseenter", () => {                           //Survol
            cursor.style.transform = "translate(-50%, -50%) scale(1.5)";    //Agrandit le curseur / Effet : feedback visuel interactif
        });

        el.addEventListener("mouseleave", () => {                           //Sortie
            cursor.style.transform = "translate(-50%, -50%) scale(1)";      //Taille normale
        });
    });
}