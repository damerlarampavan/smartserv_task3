var xArray = [50,60,70,80,90,100,110,120,130,140,150];
var yArray = [7,8,8,9,9,9,10,11,14,14,15];

var data = [{
  x: xArray,
  y: yArray,
  mode:"lines"
}];

var layout = {
  xaxis: {range: [40, 160]},
  yaxis: {range: [5, 16]}
};

Plotly.newPlot("myPlot", data, layout);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['Italy',55],
  ['France',49],
  ['Spain',44],
  ['USA',24],
  ['Argentina',15]
]);

var chart = new google.visualization.BarChart(document.getElementById('myChart'));
  chart.draw(data);


var options = {
  is3D:true
};

var chart2 = new google.visualization.PieChart(document.getElementById('my3dChart'));
  chart2.draw(data, options);
}