//Rôles : affiche projets

export function renderProjects(projects) {

    const container =
        document.getElementById("projectsTrack");

    if (!container) return;

    container.innerHTML = "";

    projects.forEach((project, index) => {

        container.innerHTML += `

        <div class="project-folder
            ${index === 1 ? "active-folder" : ""}"

            data-title="${project.title}"

            data-description="${project.description}"

            data-tech="${project.tech.join(" • ")}"
        >

            <!-- INFOS FLOTTANTES -->
            <div class="folder-info">

                <span class="folder-tag">
                    ${project.tag}
                </span>

                <h2>
                    ${project.title}
                </h2>

            </div>

            <!-- COUCHES -->
            <div class="folder-layer layer-back"></div>
            <div class="folder-layer layer-middle"></div>

            <!-- DOSSIER -->
            <div class="folder-content"></div>

        </div>
        `;
    });
}