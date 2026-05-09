//Rôles : coordonne tout

import { projects } from "../model/projects.js";          //Imports Model
import { skills } from "../model/skills.js";

import { renderProjects } from "../view/projectsView.js"; //Imports View
import { renderSkills } from "../view/skillsView.js";

export function initApp() {                               //Export controller
    //renderProjects(projects);                             //Affichage projets - envoie : les données, à la vue
    renderSkills(skills);                                 //Affichage compétences
}