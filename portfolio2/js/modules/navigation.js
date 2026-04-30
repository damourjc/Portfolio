export function initNavigation() {

    function enterSite() {
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = "home.html";
        }, 500);
    }

    // expose uniquement si nécessaire
    window.enterSite = enterSite;

    document.querySelectorAll("a").forEach(link => {
        if (link.hostname === window.location.hostname) {

            link.addEventListener("click", function(e) {
                e.preventDefault();

                const url = this.href;
                document.body.style.opacity = "0";

                setTimeout(() => {
                    window.location.href = url;
                }, 300);
            });

        }
    });
}