google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var options = {
  is3D: true,
  curveType: 'function',
  legend: { position: 'bottom' },
  width: 600,
  height: 400,
  point: {visible: true},
  animation:{
    duration: 2000,
    startup:true,
    easing: 'out',
  },
};

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Employee Onboard ', 'Employee Terminated'],
    ['2014',  1000,      400],
    ['2015',  1170,      460],
    ['2016',  660,       1120],
    ['2017',  1030,      540],
    ['2018',  200,      100]

  ]);

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
  
}

google.charts.setOnLoadCallback(drawChart_2);
function drawChart_2() {
  var data = google.visualization.arrayToDataTable([
    ['NDA/IT Forms', 'Status'],
    ['NDA/IT Forms Uploaded ',     44],
    ['NDA/IT Forms Pending ',      56]
  ]);

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}