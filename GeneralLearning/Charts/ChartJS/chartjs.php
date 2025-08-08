<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<!--<script-->
<!--  src="https://code.jquery.com/jquery-2.2.4.js"-->
<!--  integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="-->
<!--  crossorigin="anonymous"></script>-->
    <!--<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>-->
<!--    <script src="assets/chart.js"></script>-->
    <script src="assets/chart.min.old.js"></script>
<!--    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>-->
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-piechart-outlabels@0.1.4/dist/chartjs-plugin-piechart-outlabels.js"></script>
<!--    <link rel="stylesheet" href="assets/chart.css">-->
</head>
<body>
<style>
    body { background: #111; }
    .doughnut-canvas-container { background: #FFF; }
</style>
<div class="container2">
<!--    <div class="chart_container">-->
<!--        <div>Line Chart</div>-->
<!--        <div style="width: 500px; height: 500px; border: 3px solid red">-->
<!--            <canvas id="line_chart" width="400" height="400"></canvas>-->
<!--        </div>-->
<!--    </div>-->
    <div class="doughnut-canvas-container">
        <canvas id="doughnut_chart"></canvas>
<!--        <canvas class="chart" class="chartjs-render-monitor"></canvas>-->
    </div>
<!--    <div class="chart_container">-->
<!--        <div>Pie Chart</div>-->
<!--        <div style="width: 500px; height: 500px; border: 3px solid red">-->
<!--            <canvas id="pie_chart" width="400" height="400"></canvas>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="chart_container">-->
<!--        <div>Bar Chart</div>-->
<!--        <div style="width: 500px; height: 500px; border: 3px solid red">-->
<!--            <canvas id="bar_chart" width="400" height="400"></canvas>-->
<!--        </div>-->
<!--    </div>-->
</div>
<!--<script src="assets/line_chart.js"></script>-->
<!--<script src="assets/doughnut_chart.js"></script>-->
<!--<script src="assets/pie_chart.js"></script>-->
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
      data: [12.25, 19, 3, 17, 28, 24, 7]
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
        //stretch: 30,
        font: {
          resizable: true,
          minSize: 15,
          maxSize: 20,
        },
        zoomOutPercentage: 50,
        //textAlign: 'start',
      }
    }
  }
});

</script>
</body>
</html>