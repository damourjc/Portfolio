//Rôles : coordonne tout

import { skills } from "../model/skills.js";

import { renderProjects } from "../view/projectsView.js";
import { renderSkills } from "../view/skillsView.js";

export async function initApp() {

    // CHARGEMENT JSON
    const response =
        await fetch("./data/projects.json");

    const projects =
        await response.json();

    renderProjects(projects);

    renderSkills(skills);
}