import { projects } from "../model/projects.js";
import { skills } from "../model/skills.js";

import { renderProjects } from "../view/projectsView.js";
import { renderSkills } from "../view/skillsView.js";

export function initApp() {
    renderProjects(projects);
    renderSkills(skills);
}