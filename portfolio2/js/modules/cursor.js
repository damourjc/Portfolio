export function initCursor() {
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    document.querySelectorAll("button, .card").forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
        });

        el.addEventListener("mouseleave", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
        });
    });
}