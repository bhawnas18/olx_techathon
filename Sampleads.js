

function initMap(myLatLng,mapOptions) {

var myLatlng = new google.maps.LatLng(28.61,77.23);
var mapOptions = {
  zoom: 7,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Welcome to OLX!'
  });
 }
 
 var samples = [
["kawasaki ninja 650r","75000 Rs","Delhi",28.7031,77.1322],
["35 Days Old Lab Dogs ","5500 Rs","Mumbai",19.1724,72.9570], 
["Samsung S4","25000 Rs","Noida" ,28.61,77.23], 
["Dell 15 inch Laptop","20000 Rs","Bengaluru",28.5333,77.3891],
["Samsung Refrigerator","8000 Rs","Chennai",12.9822,80.1636] ,
["Elle18 Pink Lipstick","100 Rs","Gurgaon",28.4819,77.1025],
["Baby walker","300 Rs","Delhi",28.7373,77.090981]];
function myFunction{
 var marker, i;
var l=samples.length;
var myLatlng = new google.maps.LatLng(28.61,77.23);
var x = document.getElementById("city").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
var mapOptions = {
  zoom: document.getElementById("distance").value;,
  center: document.getElementById("city").value;
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
    for (i = 0; i < l; i++) {  
	    marker = new google.maps.Marker({
        position: new google.maps.LatLng(samples[i][3], samples[i][4]),
        map: map
      });
	  var contentString = '<div id="content">'+'<h1><b>'+samples[i][0]+'<b></h1>'+
	  '<p>'+samples[i][1]+'</p>'+'<p>'+samples[i][2]+'</p>'+
		'</div>';
	  
	  var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

