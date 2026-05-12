/*Le cerveau global*/
/*Modules*/                                                             //Rôle

import { initParticles } from "./modules/particles.js";                 //Fond animé
import { initCursor } from "./modules/cursor.js";                       //Curseur custom
import { initScrollAnimation } from "./modules/scroll.js";              //Animation au scroll
import { initTypingEffect } from "./modules/typing.js";                 //Effet machine à écrit
import { initCards } from "./modules/cards.js";                         //Effet 3D
import { initNavigation } from "./modules/navigation.js";               //Transitions pages
import { initHUD } from "./modules/hud.js";                             //Drag & drop
import { initSound } from "./modules/sound.js";                         //Sons
import { initIntro } from "./modules/intro.js";                         //Pages d'entrée
import { initTerminal } from "./modules/terminal.js";                   //Mini IA
import { initProjectsFX } from "./modules/projectsFX.js";   //Effets spéciaux pour les projets (ex: survol, filtres, etc.)
import { initProjectModal } from "./modules/projectModal.js";   //Fenêtre modale pour les projets (détails, images, etc.)

import { initApp } from "./mvc/controller/appController.js";

import { initChart } from "./chart/chart-config.js";

// Modules techniques

(async () => {
    initParticles();                                                        //Démarre le fond animé
    initCursor();                                                           //Active le curseur personnalisé
    initScrollAnimation();                                                  //Active les animations au scroll
    initTypingEffect();                                                     //Lance l’effet texte
    initCards();                                                            //Active les cartes interactives
    initNavigation();                                                       //Transitions entre pages
    initHUD();                                                              //Permet de déplacer les fenêtres
    initSound();                                                            //Active les sons
    initIntro();                                                            //Gère la page d’accueil
    initTerminal();                                                         //Active le terminal interactif
    initProjectsFX();                                                        //Active les effets spéciaux pour les projets (ex: survol, filtres, etc.)
    initProjectModal();                                                        //Active la fenêtre modale pour les projets (détails, images, etc.)


    // MVC
    await initApp();                                                            //Lance : renderProjects(projects); et renderSkills(skills);
                                                                            //Donc : injecte les projets et injecte les compétences
    // Graph
    initChart();                                                            //Crée le graphique radar
})();