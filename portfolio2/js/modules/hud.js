export function initHUD() {
    document.querySelectorAll(".hud-window").forEach(windowEl => {

        let isDragging = false;
        let offsetX, offsetY;

        const header = windowEl.querySelector(".hud-header");
        if (!header) return;

        header.style.cursor = "move";

        header.addEventListener("mousedown", (e) => {
            isDragging = true;

            offsetX = e.clientX - windowEl.offsetLeft;
            offsetY = e.clientY - windowEl.offsetTop;

            windowEl.style.position = "absolute";
            windowEl.style.zIndex = 1000;

            document.body.style.userSelect = "none";
        });

        document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;

            windowEl.style.left = (e.clientX - offsetX) + "px";
            windowEl.style.top = (e.clientY - offsetY) + "px";
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
            document.body.style.userSelect = "auto";
        });

    });
}