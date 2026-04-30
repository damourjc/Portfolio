export function renderSkills(skills) {
    const container = document.querySelector(".skills-container");
    if (!container) return;

    container.innerHTML = "";

    skills.forEach(skill => {
        container.innerHTML += `
            <div class="skill">
                <p>${skill.name}</p>
                <div class="bar">
                    <div class="progress" style="width:${skill.level}%"></div>
                </div>
            </div>
        `;
    });
}