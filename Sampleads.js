

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

 var latlng=[{city:"Delhi", lat:28.61,longitude:77.73},{city:"Bengaluru", lat:12.9667,longitude:77.5667},{city:"Chennai", lat:13.0827,longitude:80.2707},{city:"Gurgaon", lat:28.47,longitude:77.03},{city:"Noida", lat:28.57,longitude:77.32},{city:"Mumbai", lat:18.975,longitude:72.8258}]

var samples = [
["kawasaki ninja 650r","75000 Rs","Delhi",28.7031,77.1322],
["35 Days Old Lab Dogs ","5500 Rs","Mumbai",19.1724,72.9570], 
["Samsung S4","25000 Rs","Noida" ,28.61,77.23], 
["Dell 15 inch Laptop","20000 Rs","Bengaluru",28.5333,77.3891],
["Samsung Refrigerator","8000 Rs","Chennai",12.9822,80.1636] ,
["Elle18 Pink Lipstick","100 Rs","Gurgaon",28.4819,77.1025],
["Baby walker","300 Rs","Delhi",28.7373,77.090981]];


function myFunction(){
 var marker, i;
var l=samples.length;
var a=document.getElementById("city").value;
var lat,longitude;
for(i=0;i<6;i++){
	if(a==latlng[i].city){
		lat=latlng[i].lat;
		longitude=latlng[i].longitude;
	}
}
var myLatlng = new google.maps.LatLng(lat,longitude);
    
var mapOptions = {
  zoom: Number(document.getElementById("distance").value),
  center: myLatlng
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

}