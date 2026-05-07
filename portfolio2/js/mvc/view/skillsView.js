//Rôles : affiche compétences

export function renderSkills(skills) {              //Export : même logique
    const container = document.querySelector(".skills-container"); // Sélection
    if (!container) return;                         //Sécurité

    container.innerHTML = ``;                       //Nettoyage

    skills.forEach(skill => {                       //Boucle
        container.innerHTML += `
            <div class="skill">
                <p>${skill.name}</p>
                <div class="bar">
                    <div class="progress" style="width:${skill.level}%"></div>
                </div>
            </div>
        `; //HTML dynamique : nom, compétence / Barre dynamique : Exemple : "level: 70" devient "width:70%" la barre change automatiquement
    });
}