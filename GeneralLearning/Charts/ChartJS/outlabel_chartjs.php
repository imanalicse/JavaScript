<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>

</head>
<body>
<style>
    body { background: #111; }
    .doughnut-canvas-container { background: #FFF; }
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-piechart-outlabels@0.1.4/dist/chartjs-plugin-piechart-outlabels.min.js"></script>


<div class="doughnut-canvas-container" style="border: 2px solid red; width: 1000px; height: 1000px">
  <canvas class="chart" id="doughnut_chart"></canvas>
</div>

<script>
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
    // legend: {
    //   display: false
    // },
     legend: {
         position: 'bottom',
         labels: {
             usePointStyle: true,
             boxWidth: 10
         }
     },
     //  scales: {
     //     y: {
     //         beginAtZero: false
     //     }
     // },
    plugins: {
      outlabels: {
         backgroundColor: null,
        // color: COLORS,
        //  stretch: 30,
        // font: {
        //   resizable: true,
        //   minSize: 15,
        //   maxSize: 20,
        // },
        color: 'red', // Font color
        text: "%p",
         //zoomOutPercentage: 100,
         textAlign: 'start',
      }
    }
  }
});
</script>

</body>
</html>