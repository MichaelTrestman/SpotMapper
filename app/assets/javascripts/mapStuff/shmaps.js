var Map = {};

var initialize = function(){

  var Latlng = new google.maps.LatLng(40.85, -96.75);

  var mapOptions = {
    zoom: 2,
    center: Latlng
  }

  Map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  Map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
}

$(document).ready(
  function(){
  initialize();
})
