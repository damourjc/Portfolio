export function initScrollAnimation() {                     //Export
    const observer = new IntersectionObserver(entries => {  //Création de l’observer : “observer” = un système qui surveille des éléments
                                                            //Traduction simple : “Dis-moi quand un élément apparaît à l’écran”
        entries.forEach(entry => {                          //Parcours des éléments observés : entries = liste des éléments surveillés
            if (entry.isIntersecting) {                     //Condition : visible à l’écran : TRUE si l’élément est visible dans la fenêtre
                entry.target.classList.add("show");         //Ajouter une classe : ajoute : .show / Résultat : animation d’apparition
            }
        });
    });

    document.querySelectorAll(".hidden").forEach(el => observer.observe(el)); //Sélection des éléments - Tu fais : sélectionner tous les éléments cachés
}                                                                             //dire à l’observer de les surveiller / Exemple HTML : <section class="hidden">...</section>