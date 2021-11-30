<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
    <!--<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>-->
<!--    <script src="assets/chart.js"></script>-->
    <script src="assets/chart.min.old.js"></script>
<!--    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>-->
    <link rel="stylesheet" href="assets/chart.css">
</head>
<body>
<div class="container">
    <div class="chart_container">
        <div>Pie Chart</div>
        <div style="width: 500px; height: 500px; border: 3px solid red">
            <canvas id="pie_chart" width="400" height="400"></canvas>
        </div>
    </div>
</div>
<!--<script src="assets/pie_chart.js"></script>-->
<script>

var pie_ctx = document.getElementById('pie_chart');

var pie_chart = new Chart(pie_ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
                ticks : {
                    mirror: true
                }
            }
        },
        plugins: {
              outlabels: false
        },
        tooltips: {
            yAlign: 'bottom',
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        backgroundColor: 'pink'
                    }
                },
            },
            backgroundColor: '#fff',
            bodyFontColor: '#000',
            // displayColors: false,
            // borderWidth: 1,
            // borderColor: '#22B0AF',
            // boxHeight: 160,
            // boxWidth: 200
        }
    }
});

</script>
</body>
</html>