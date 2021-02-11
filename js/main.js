/*
Jin Ning Huang
GEOG 458, LAB 03
1/27/2021

This js file does the fetch for airport data, adds map elements, and creates
interactive user on the map. This file will connect to the main index.html.
*/

// Create a map object.
var mymap = L.map('map', {
    center: [37.0902, -95.7129],
    zoom: 4,
    maxZoom: 12,
    minZoom: 2,
    detectRetina: true // detect whether the sceen is high resolution or not.
});

// Add a base map.
L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png").addTo(mymap);

// Add airports GeoJSON Data
// Null variable that will hold airport data
var airports = null;

// Build up a set of colors from colorbrewer's dark2 category
var colors = chroma.scale('Dark2').mode('lch').colors(3);

// Dynamically append style classes to this page. This style classes will be used for colorize the markers.
for (i = 0; i < 2; i++) {
    $('head').append($("<style> .marker-color-" + (i + 1).toString() + " { color: " + colors[i] + "; font-size: 15px; text-shadow: 0 0 3px #ffffff;} </style>"));
}

// Get GeoJSON and put on it on the map when it loads
airports= L.geoJson.ajax("assets/airports.geojson", {
  // assign a function to the onEachFeature parameter of the airport object.
  // Then each (point) feature will bind a popup window.
  // The content of the popup window is the value of `feature.properties.airport name`
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.AIRPT_NAME);
    return feature.properties.CNTL_TWR;
  },
  pointToLayer: function (feature, latlng) {
  var id = 0;
  if (feature.properties.CNTL_TWR == "Y") { id = 0; }
  else if (feature.properties.CNTL_TWR == "N")  { id = 1; }
  else { id = 2;}
  return L.marker(latlng, {icon: L.divIcon({
    className: 'fa fa-plane marker-color-' + (id + 1).toString() })});
  },
  attribution: 'US Airport Data &copy; USGS | US States Boundary &copy; Mike Bostock of D3 | Base Map &copy; CartoDB | Made By Jin Ning Huang'
}).addTo(mymap);

// Set function for color ramp
colors = chroma.scale('YlOrRd').colors(5);

function setColor(count) {
    var id = 0;
    if (count > 35) { id = 4; }
    else if (count > 20 && count <= 35) { id = 3; }
    else if (count > 15 && count <= 20) { id = 2; }
    else if (count > 5 &&  count <= 15) { id = 1; }
    else  { id = 0; }
    return colors[id];
}

// Set style function that sets fill color.md property equal to airport count
function style(feature) {
    return {
        fillColor: setColor(feature.properties.count),
        fillOpacity: 0.4,
        weight: 2,
        opacity: 1,
        color: '#b4b4b4',
        dashArray: '4'
    };
}

// Add county polygons
// create counties variable, and assign null to it.
var states = null;
states = L.geoJson.ajax("assets/us-states.geojson", {
    style: style
}).addTo(mymap);

// Create Leaflet Control Object for Legend
var legend = L.control({position: 'topright'});

// Function that runs when legend is added to map
legend.onAdd = function () {

    // Create Div Element and Populate it with HTML
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<b>Airport Count by State</b><br />';
    div.innerHTML += '<i style="background: ' + colors[4] + '; opacity: 0.5"></i><p> 35+ </p>';
    div.innerHTML += '<i style="background: ' + colors[3] + '; opacity: 0.5"></i><p> 20-35 </p>';
    div.innerHTML += '<i style="background: ' + colors[2] + '; opacity: 0.5"></i><p> 15-20 </p>';
    div.innerHTML += '<i style="background: ' + colors[1] + '; opacity: 0.5"></i><p> 5-15 </p>';
    div.innerHTML += '<i style="background: ' + colors[0] + '; opacity: 0.5"></i><p> <5 </p>';
    div.innerHTML += '<hr><b>Air Control Tower Present<b><br />';
    div.innerHTML += '<i class="fa fa-plane marker-color-1"></i><p> Yes </p>';
    div.innerHTML += '<i class="fa fa-plane marker-color-2"></i><p> No </p>';
    // Return the Legend div containing the HTML content
    return div;
};

// Add a legend to map
legend.addTo(mymap);

// Add a scale bar to map
L.control.scale({position: 'bottomleft'}).addTo(mymap);
