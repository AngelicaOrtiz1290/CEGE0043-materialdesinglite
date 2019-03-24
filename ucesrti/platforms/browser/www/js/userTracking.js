<html>
<head>
<title>Test HTML Location Functionality</title>
<script>
function trackLocation() {
if (navigator.geolocation) {
navigator.geolocation.watchPosition(showPosition);
} else {
document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";
}
}
function showPosition(position) {
document.getElementById('showLocation').innerHTML = "Latitude: " + position.coords.latitude +
"<br>Longitude: " + position.coords.longitude;
}
</script>
</head>
<body>
<b>This code will display your current location</b>
<div id='showLocation'>Location will be displayed here</div>
<button id='trackLocation' onclick='trackLocation()'>Click Me to Get Your Location</button>
</body>