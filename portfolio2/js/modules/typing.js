export function initTypingEffect() {                        //Export
    const text = "Développeur créatif | IA | Projets innovants"; //Texte à afficher
    let index = 0;                                          //Index : position actuelle dans le texte / Exemple : 0 = D, 1 = é, 2 = v, ...

    const element = document.getElementById("typing");      //Élément HTML - récupère : <p id="typing"></p>
    if (!element) return;                                   //Sécurité 

    element.innerHTML = "";                                 //Nettoyage - vide le texte avant animation

    function type() {                                       //Fonction de frappe - fonction récursive
        if (index < text.length) {                          //Vérification - continue tant qu’il reste des lettres
            element.innerHTML += text.charAt(index);        //Ajouter une lettre - ajoute : caractère par caractère / charAt(index) : récupère une lettre précise
            index++;                                        //Incrémentation - passe à la lettre suivante
            setTimeout(type, 50);                           //Délai - rappelle la fonction après 50ms / Résultat : effet machine à écrire
        }
    }

    type();                                                 //Démarrage - lance l’animation
}