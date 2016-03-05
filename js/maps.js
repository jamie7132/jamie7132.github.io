google.load("visualization", "1", {packages:["geochart"]});
google.setOnLoadCallback(drawWorldMap);

function drawWorldMap() {

  var data = google.visualization.arrayToDataTable([
    ['Country', 'Relation'], // 0.5 citizen, 1 lived, 2 visited
    ['US', 0.5],
    ['GB',0.5],
    ['FR',1],
    ['SG',1],
    ['CA',2],
    ['MX',2],
    ['MC',2],
    ['BE',2],
    ['NL',2],
    ['LU',2],
    ['DE',2],
    ['AT',2],
    ['CH',2],
    ['IT',2],
    ['VA',2],
    ['TH',2],
    ['PH',2]
  ]);

  var options = {
    legend: 'none', 
    backgroundColor: '#202024', 
    datalessRegionColor: '#c1c1c1', 
    displayMode: 'regions', 
    colorAxis: {
      minValue: 0, maxValue: 2, 
      colors: ['red','#7A0029', 'green', '#336699', 'blue', '#3366CC'],
    },
    tooltip: {
      trigger: 'none'
    }
  };

  var geochart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  geochart.draw(data, options);
}
