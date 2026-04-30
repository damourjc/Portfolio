import { initParticles } from "./modules/particles.js";
import { initCursor } from "./modules/cursor.js";
import { initScrollAnimation } from "./modules/scroll.js";
import { initTypingEffect } from "./modules/typing.js";
import { initCards } from "./modules/cards.js";
import { initNavigation } from "./modules/navigation.js";
import { initHUD } from "./modules/hud.js";
import { initSound } from "./modules/sound.js";
import { initIntro } from "./modules/intro.js";
import { initTerminal } from "./modules/terminal.js";

import { initApp } from "./mvc/controller/appController.js";

import { initChart } from "./chart/chart-config.js";

// Modules techniques
initParticles();
initCursor();
initScrollAnimation();
initTypingEffect();
initCards();
initNavigation();
initHUD();
initSound();
initIntro();
initTerminal();

// MVC
initApp();

// Graph
initChart();