export function initChart() {                                   //Rend la fonction utilisable ailleurs
    const ctxChart = document.getElementById('chart');          //Récupère : <canvas id="chart"></canvas>
    if (!ctxChart) return;                                      //Sécurité : si la page n’a pas de graphique → on arrête / Evite les erreurs JS

    new Chart(ctxChart, {                                       //Utilise la librairie Chart.js
        type: 'radar',                                          //Graphique radar (toile d’araignée)
        data: {
            labels: ["Python", "HTML", "CSS", "JS"],            //Noms des compétences
            datasets: [{
                label: "Niveau",                                //Nom de la série
                data: [70, 60, 50, 40],                         //Valeurs qui correspond à : Python = 70, HTML = 60, etc.
                borderColor: "#00f0ff",
                backgroundColor: "rgba(0,240,255,0.2)"        //Style : contour cyan et remplissage transparent
            }]
        },
        options: {                                              //Personnalisation du graphique
            scales: {
                r: {                                            //Axe radial (spécifique radar)
                    grid: { color: "#444" },                  //Couleur des lignes
                    angleLines: { color: "#666" },            //Lignes vers le centre
                    ticks: { color: "white", backdropColor: "transparent" }, // Valeurs (0, 20, 40…)
                    pointLabels: { color: "white" }             //Noms (Python, etc.)
                }
            },
            plugins: {
                legend: {
                    labels: { color: "white" }                  //Couleur du texte de la légende
                }
            }
        }
    });
}