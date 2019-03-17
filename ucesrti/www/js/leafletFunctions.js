
function addPointLinePoly(){
    //add a point
    L.marker([51.5,-0.09]).addTo(mymap).bindPopup("<b>Hello world!</b><br/>I am a popup.").openPopup();
    //add a circle
    L.circle([51.508,-0.11],500,{color:'red',fillColor:'#f03',fillOpacity:0.5}).addTo(mymap).binPopup("I am a circle.");
    //add a polygon with 3 end points(i.e. a triangle)
    var myPolygon = L.polygon([[51.509,-0.08],[51.503,-0.06],[51.51,-0.047]],{color:'red',fillColor:'#f03',fillOpacity:0.5}).addTo(mymap).bindPopup("I am a polygon.");
 }

 function getEarthquakes(){
 	var client;
	var earthquakelayer;
	function getEarthquakes(){
		client=new XMLHttpRequest();
		client.open('GET','https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
		client.onreadystatechange = earthquakeResponse;
		client.send();
 }
 // Wait for the response from data server, and proces once received
	function earthquakeResponse(){
		if(client.readyState==4){
			var earthquakedata=client.responseText;
			loadEarthquakelayer(earthquakedata);
		}
	}
/// Define a global variable to hold the layer so that we can use it later on
var earthquakelayer;
// convert the received data - txt-to JSON and add it to the map
	function loadEarthquakelayer(earthquakedata){
// convert the text to JSON
	var earthquakejson = JSON.parse(earthquakedata);
// load the geoJSON layer
earthquakelayer=L.geoJson(earthquakejson,{
	//use point to ayer to create the point
	pointToLayer:function(feature,latlng)
{