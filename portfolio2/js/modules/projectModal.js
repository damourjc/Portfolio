export function initProjectModal() {

    const modal = document.getElementById("projectModal");

    if (!modal) return;

    const closeBtn = document.getElementById("closeModal");

    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalTech = document.getElementById("modalTech");

    const folders = document.querySelectorAll(".project-folder");

    folders.forEach(folder => {

        folder.addEventListener("click", () => {

            modalTitle.textContent =
                folder.dataset.title;

            modalDescription.textContent =
                folder.dataset.description;

            modalTech.textContent =
                folder.dataset.tech;

            modal.classList.add("active");
        });

    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
}