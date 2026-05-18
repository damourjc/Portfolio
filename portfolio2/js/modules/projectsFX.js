export function initProjectsFX() {

    const folders =
        document.querySelectorAll(".project-folder");

    if (!folders.length) return;

    let activeIndex = 0;

    updateCarousel();

    folders.forEach((folder, index) => {

        folder.addEventListener("click", () => {

            activeIndex = index;

            updateCarousel();

        });

    });

    // =====================================
    // POSITIONNEMENT
    // =====================================

    function updateCarousel() {

        folders.forEach((folder, index) => {

            const offset = index - activeIndex;

            // reset
            folder.classList.remove("active-folder");

            // ACTIF
            if (offset === 0) {

                folder.classList.add("active-folder");

                folder.style.transform = `
                    translateX(0px)
                    scale(1.1)
                    rotateY(0deg)
                `;

            }

            // GAUCHE
            else if (offset < 0) {

                folder.style.transform = `
                    translateX(${offset * 220}px)
                    scale(0.8)
                    rotateY(25deg)
                `;
            }

            // DROITE
            else {

                folder.style.transform = `
                    translateX(${offset * 220}px)
                    scale(0.8)
                    rotateY(-25deg)
                `;
            }

        });

    }

    updateActiveProject();

    window.addEventListener("resize", () => {
        updateActiveProject();
    });

}

export function updateActiveProject() {

    const folders =
        document.querySelectorAll(".project-folder");

    if (folders.length === 0) return;

    let closestFolder = null;
    let closestDistance = Infinity;

    const screenCenter = window.innerWidth / 2;

    folders.forEach(folder => {

        const rect =
            folder.getBoundingClientRect();

        const folderCenter =
            rect.left + rect.width / 2;

        const distance =
            Math.abs(screenCenter - folderCenter);

        if (distance < closestDistance) {

            closestDistance = distance;
            closestFolder = folder;
        }
    });

    folders.forEach(folder => {
        folder.classList.remove("active-folder");
    });

    if (closestFolder) {
        closestFolder.classList.add("active-folder");
    }
}