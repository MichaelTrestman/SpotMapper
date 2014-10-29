

var initialize = function(){

  myLatlng = new google.maps.LatLng(40.85, -96.75);

  mapOptions = {
    zoom: 2,
    center: myLatlng
  }

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
}

$(document).ready(function(){
  initialize();
})
