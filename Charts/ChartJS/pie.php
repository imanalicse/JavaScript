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
        <div style="border: 3px solid red">
            <canvas id="pie_chart"></canvas>
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
        legend: {
            position: 'bottom'
        },
        tooltips: {
            mode: 'nearest',
            //yAlign: 'bottom',
            xPadding: 15,
            yPadding: 10,
            callbacks: {
                label: function(tooltipItem, data) {
                    var newData = data.datasets[tooltipItem.datasetIndex].data;
                    let sum = newData.reduce(function (a, b) {
                          return a + b;
                        }, 0);
                    var dataValue = newData[tooltipItem.index];
                    var first_line_data = data.labels[tooltipItem.index];
                    var second_line_data = dataValue + '% (' + sum + ')';
                    return [first_line_data, second_line_data];
                  }
            },
            backgroundColor: '#fff',
            bodyFontColor: '#000',
            displayColors: false,
            borderWidth: 1,
            borderColor: '#22B0AF',
        }
    }
});

</script>
</body>
</html>