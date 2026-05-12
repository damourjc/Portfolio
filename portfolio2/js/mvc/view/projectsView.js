//Rôles : affiche projets

export function renderProjects(projects) {

    const container =
        document.getElementById("projectsTrack");

    if (!container) return;

    container.innerHTML = "";

    projects.forEach(project => {

        container.innerHTML += `

        <div class="project-folder"

            data-title="${project.title}"

            data-description="${project.description}"

            data-tech="${project.tech.join(" • ")}"
        >

            <div class="folder-layer layer-back"></div>
            <div class="folder-layer layer-middle"></div>

            <div class="folder-content">

                <span class="folder-tag">
                    ${project.tag}
                </span>

                <h2>${project.title}</h2>

                <p>
                    ${project.description}
                </p>

            </div>

        </div>
        `;
    });
}