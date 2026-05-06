export function initNavigation() {                              //Export

    function enterSite() {                                      //Fonction interne : fonction utilitaire (pas directement utilisée dans le code actuel)
        document.body.style.opacity = "0";                      //effet de fondu (fade out)

        setTimeout(() => {
            window.location.href = "home.html";                 //redirection
        }, 500);                                                //après 500 ms
    }

    // expose uniquement si nécessaire
    window.enterSite = enterSite;                               //Exposition globale : rend la fonction accessible dans le HTML / Exemple : 
                                                                //<button onclick="enterSite()">Entrer</button>
    document.querySelectorAll("a").forEach(link => {            //Gestion des liens : sélectionne tous les liens : <a href="home.html">Accueil</a>
        if (link.hostname === window.location.hostname) {       //Vérification du domaine : ne s’applique que si : lien interne au site
                                                                //évite de casser : liens externes (Google, etc.)
            link.addEventListener("click", function(e) {        //Clic sur lien : 
                e.preventDefault();                             //Bloquer comportement normal : empêche le changement immédiat de page

                const url = this.href;                          //Sauvegarde URL : récupère le lien cliqué
                document.body.style.opacity = "0";              //Animation : fade out

                setTimeout(() => {                              //Délai + redirection : 
                    window.location.href = url;                 //après 300 ms → changement de page
                }, 300);
            });

        }
    });
}