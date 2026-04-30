export function renderProjects(projects) {
    const container = document.querySelector("#projects-container");
    if (!container) return;

    container.innerHTML = "";

    projects.forEach(p => {
        container.innerHTML += `
            <div class="project-card">
                <div class="project-content">
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                    <small>${p.tech.join(", ")}</small>
                </div>
            </div>
        `;
    });
}