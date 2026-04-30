export function initSound() {
    const hoverSound = document.getElementById("hoverSound");
    const clickSound = document.getElementById("clickSound");

    document.querySelectorAll("button, a").forEach(el => {

        el.addEventListener("mouseenter", () => {
            if (hoverSound) {
                hoverSound.currentTime = 0;
                hoverSound.play();
            }
        });

        el.addEventListener("click", () => {
            if (clickSound) {
                clickSound.currentTime = 0;
                clickSound.play();
            }
        });

    });

    document.addEventListener("click", () => {
        if (hoverSound) hoverSound.volume = 0.2;
        if (clickSound) clickSound.volume = 0.3;
    }, { once: true });
}