export function initCursor() {

    const cursor = document.querySelector(".cursor");

    if (!cursor) return;

    // Déplacement curseur
    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    // Effet hover
    document.querySelectorAll("button, a, .card").forEach(el => {

        el.addEventListener("mouseenter", () => {

            cursor.style.transform =
                "translate(-50%, -50%) scale(1.8)";
        });

        el.addEventListener("mouseleave", () => {

            cursor.style.transform =
                "translate(-50%, -50%) scale(1)";
        });
    });
}