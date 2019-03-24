var client
 
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
	//look at the GeoJson file-specifically at the properties-to see the earthquake magnitude and use a different marker depending on its value
// also incluide a op-up that showa the place value of the earthquakes
if(feature.properties.mag>1.75){
	return L.marker(latlng,{icon:testMarkerRed}).bindPopup("<b>"+feature.properties.place+"</b>");
}else{
	//magnitude is 1.75 or less
	return L.marker(latlng,{icon:testMarkerPink}).bindPopup("<b>"+feature.properties.place+"</b>");;
}
},
}).addTo(mymap);
mymap.fitBounds(earthquakelayer.getBounds());
}}