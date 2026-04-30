export function initIntro() {
    const btn = document.querySelector(".intro-btn");
    if (!btn) return;

    btn.addEventListener("click", () => {
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = "home.html";
        }, 500);
    });
}