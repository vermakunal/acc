google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Employee Onboard ', 'Employee Terminated'],
    ['2014',  1000,      400],
    ['2015',  1170,      460],
    ['2016',  660,       1120],
    ['2017',  1030,      540],
    ['2018',  200,      100]
  ]);

  var options = {
    // title: 'OnBoard/OffBoard Employees monthly status',
    curveType: 'function',
    legend: { position: 'bottom' },
    width: 900,
    height: 400,
  
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}