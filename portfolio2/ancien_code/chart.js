const ctxChart = document.getElementById('chart');

if (ctxChart) {
    new Chart(ctxChart, {
        type: 'radar',
        data: {
            labels: ["Python", "HTML", "CSS", "JS"],
            datasets: [{
                label: "Niveau",
                data: [70, 60, 50, 40],
                borderColor: "#00f0ff",
                backgroundColor: "rgba(0,240,255,0.2)"
            }]
        },
        options: {
            scales: {
                r: {
                    grid: {
                        color: "#444"
                    },
                    angleLines: {
                        color: "#666"
                    },
                    ticks: {
                        color: "white",
                        backdropColor: "transparent"
                    },
                    pointLabels: {
                        color: "white"
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: "white"
                    }
                }
            }
        }
    });
}