export function initIntro() {                           //Export
    const btn = document.querySelector(".intro-btn");   //Sélection bouton : <button class="intro-btn">Bienvenue</button>
    if (!btn) return;                                   //Sécurité : évite erreur sur autres pages

    btn.addEventListener("click", () => {               //CLIC
        document.body.style.opacity = "0";              //Effet fondu lié à CSS : transition: opacity 0.3s ease;

        setTimeout(() => {                              //Délai : attend avant de changer de page
            window.location.href = "home.html";         //redirection
        }, 500);                                        //500ms → laisse le temps à l’animation
    });
}