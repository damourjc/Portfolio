import { renderProjects } from "../view/projectsView.js";
import { renderSkills } from "../view/skillsView.js";

import { skills } from "../model/skills.js";

import { initProjectsFX } from "../../modules/projectsFX.js";
import { initProjectModal } from "../../modules/projectModal.js";

export async function initApp() {

    // ===== CHARGEMENT JSON =====

    const response = await fetch("./js/data/projects.json");

    const projects = await response.json();

    // ===== RENDER =====

    renderProjects(projects);

    renderSkills(skills);

    // ===== FX =====

    initProjectsFX();

    initProjectModal();
}