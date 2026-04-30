export function initTerminal() {
    const input = document.getElementById("terminal-input");
    const output = document.getElementById("terminal-output");

    if (!input || !output) return;

    input.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            const command = input.value;

            output.innerHTML += `> ${command}<br>`;

            const response = aiResponse(command);

            if (response === "CLEAR") {
                output.innerHTML = "";
            } else {
                output.innerHTML += `${response}<br>`;
            }

            input.value = "";
            output.scrollTop = output.scrollHeight;
        }
    });

    document.addEventListener("click", () => {
        input.focus();
    });
}


// --- IA SIMPLE ---
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
        return "Regarde la section projets.";
    }

    if (text.includes("clear")) {
        return "CLEAR";
    }

    return "Commande inconnue.";
}