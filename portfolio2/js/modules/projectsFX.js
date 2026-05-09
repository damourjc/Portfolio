export function initProjectsFX() {

    const folders = document.querySelectorAll(".project-folder");

    folders.forEach(folder => {

        folder.addEventListener("mousemove", (e) => {

            const rect = folder.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = -(x - centerX) / 20;

            folder.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.03)
            `;
        });

        folder.addEventListener("mouseleave", () => {

            folder.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                scale(1)
            `;
        });

    });
}