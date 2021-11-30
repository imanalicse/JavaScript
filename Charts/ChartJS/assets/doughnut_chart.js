    const COLORS = [
  "#2ecc71",
  "#3498db",
  "#95a5a6",
  "#9b59b6",
  "#f1c40f",
  "#e74c3c",
  "#34495e"
];

var doughnut_ctx = document.getElementById('doughnut_chart');

new Chart(doughnut_ctx, {
  type: 'doughnut',
  data: {
    labels: ["Green", "Blue", "Gray", "Purple", "Yellow", "Red", "Black"],
    datasets: [{
      backgroundColor: COLORS,
      data: [12, 19, 3, 17, 28, 24, 7]
    }]
  },
  options: {
    layout: {
        padding: 50
    },
    legend: {
      display: false
    },
    plugins: {
      outlabels: {
        backgroundColor: null,
        color: COLORS,
        stretch: 30,
        font: {
          resizable: true,
          minSize: 15,
          maxSize: 20,
        },
        zoomOutPercentage: 100,
        textAlign: 'start',
        backgroundColor: null
      }
    }
  }
});