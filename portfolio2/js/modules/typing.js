export function initTypingEffect() {
    const text = "Développeur créatif | IA | Projets innovants";
    let index = 0;

    const element = document.getElementById("typing");
    if (!element) return;

    element.innerHTML = "";

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    type();
}