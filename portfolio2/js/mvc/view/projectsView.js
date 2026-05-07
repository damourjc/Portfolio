//Rôles : affiche projets

export function renderProjects(projects) {                  //Export : reçoit les données en paramètre
    const container = document.querySelector("#projects-container"); //Sélection conteneur - récupère : <div id="projects-container"></div>
    if (!container) return;                                 //Sécurité

    container.innerHTML = "";                               //Nettoyage : vide le contenu avant affichage / utile pour : refresh et mise à jour dynamique

    projects.forEach(p => {                                 //Boucle projets : parcourt chaque projet
        container.innerHTML += `                            
            <div class="project-card">
                <div class="project-content">
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                    <small>${p.tech.join(", ")}</small>
                </div>
            </div>
        `; //Ajout HTML : ajoute du HTML dynamiquement / Carte projet : <div class="project-card"> / Données dynamiques : ${}, injecte une variable dans le HTML
    }); //<p>${p.description}</p> / Tableau → texte : <small>${p.tech.join(", ")}</small> / join() : Transforme : ["HTML", "CSS", "JS"] en HTML, CSS, JS
}