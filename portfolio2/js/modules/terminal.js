export function initTerminal() {                                //Export
    const input = document.getElementById("terminal-input");    //Sélection des éléments - récupère :
    const output = document.getElementById("terminal-output");  //<input id="terminal-input"> / <div id="terminal-output"></div>

    if (!input || !output) return;                              //Sécurité - très bonne pratique : si les éléments n’existent pas → stop

    input.addEventListener("keypress", function(e) {            //Détection clavier - écoute les touches tapées dans l’input
        if (e.key === "Enter") {                                //Vérification touche ENTER - ne déclenche que si : touche Entrée
            const command = input.value;                        //Récupération commande - récupère ce que l’utilisateur a écrit / Exemple : bonjour

            output.innerHTML += `> ${command}<br>`;             //Affichage commande - ajoute dans le terminal : > bonjour / += : ajoute sans effacer le contenu précédent

            const response = aiResponse(command);               //Génération réponse - appelle la fonction IA

            if (response === "CLEAR") {                         //Commande spéciale CLEAR - 
                output.innerHTML = "";                          //vide complètement le terminal
            } else {
                output.innerHTML += `${response}<br>`;          //Réponse normale - affiche la réponse
            }                                                   //Exemple : Bonjour humain 👋

            input.value = "";                                   //Réinitialisation input : vide le champ texte
            output.scrollTop = output.scrollHeight;             //Scroll automatique : descend automatiquement tout en bas
        }
    });

    document.addEventListener("click", () => {                  //Focus automatique - dès que tu cliques :
        input.focus();                                          //le terminal récupère le focus
    });                                                         //UX très intelligente : tu peux taper directement
}


// --- IA SIMPLE ---
function aiResponse(text) {                                     //IA SIMPLE - Fonction interne
    text = text.toLowerCase();                                  //analyse le texte utilisateur / Minuscules pour éviter problèmes : BONJOUR, Bonjour, bonjour
                                                                // Conditions : 
    if (text.includes("bonjour") || text.includes("salut")) {   //"Bonjour", détecte mots-clés
        return "Bonjour humain 👋";                            //Réponse
    }

    if (text.includes("qui es tu")) {                           //Même logique
        return "Je suis une IA intégrée dans ce portfolio.";
    }

    if (text.includes("python")) {                              //Même logique
        return "Python est un langage puissant que j’utilise.";
    }

    if (text.includes("projet")) {                              //Même logique
        return "Regarde la section projets.";
    }

    if (text.includes("clear")) {                               //Clear : commande spéciale
        return "CLEAR";
    }

    return "Commande inconnue.";                                //Réponse inconnue : fallback
}