function getLocation(){
	var pos = {lat: -33.448890, lng: -70.669265};
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(function(position) {
	    pos = {
	      lat: position.coords.latitude,
	      lng: position.coords.longitude
	    };
	  }, function() {
	    pos = {lat: -33.448890, lng: -70.669265};
	  });
	} else {
	    // Browser doesn't support Geolocation
		return {lat: -33.448890, lng: -70.669265};
	}
	return pos;
}