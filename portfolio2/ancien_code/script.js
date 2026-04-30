const canvas = document.getElementById("particles");

if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speedX: (Math.random() - 0.5),
            speedY: (Math.random() - 0.5)
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            ctx.fillStyle = "#00f0ff";
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}

const cursor = document.querySelector(".cursor");

if (cursor) {
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

// Animation scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));


// Effet typing
const text = "Développeur créatif | IA | Projets innovants";
let index = 0;
const element = document.getElementById("typing");

function typeEffect() {
    if (element && index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

if (element) {
    element.innerHTML = "";
    typeEffect();
}

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});

function enterSite() {
    document.body.style.opacity = "0";
    document.body.style.transition = "0.5s";

    setTimeout(() => {
        window.location.href = "home.html";
    }, 500);
}

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

const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

if (input && output) {
    input.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            const command = input.value;
            output.innerHTML += `> ${command}<br>`;

            function aiResponse(text) {
                text = text.toLowerCase();

                if (text.includes("bonjour") || text.includes("salut")) {
                    return "Bonjour humain 👋";
                }

                if (text.includes("qui es tu")) {
                    return "Je suis une IA intégrée dans ce portfolio.";
                }

                if (text.includes("python")) {
                    return "Python est un langage puissant que j’utilise.";
                }

                if (text.includes("projet")) {
                    return "Regarde la section projets pour voir mes créations.";
                }

                if (text.includes("clear")) {
                    return "CLEAR_COMMAND";
                }

                return "Je n’ai pas compris ta demande.";
            }

            input.value = "";
            output.scrollTop = output.scrollHeight;
        }
    });
}

document.addEventListener("click", () => {
    if (input) input.focus();
});

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