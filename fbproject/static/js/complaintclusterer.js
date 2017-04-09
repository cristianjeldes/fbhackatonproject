function initMap() {

    var locations = getData();

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat: -33.448890, lng: -70.669265}
    });

    // The next values are in terms of pixels
    var iconSize = 48;
    var iconScaled = 36;
    var iconMiddle = iconSize / 2;
    var infoOffset = (iconScaled - iconSize) / 2;
    // End of pixel values
    var iconBase = '/static/img/icons/';
    var icons = {
        bus: {
            url: iconBase + 'bus.png',
            size: new google.maps.Size(iconSize, iconSize),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(iconMiddle, iconSize),
            scaledSize: new google.maps.Size(iconScaled, iconScaled)

        },
        taxi: {
            url: iconBase + 'taxi.png',
            size: new google.maps.Size(iconSize, iconSize),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(iconMiddle, iconSize),
            scaledSize: new google.maps.Size(iconScaled, iconScaled)
        },
        metro: {
            url: iconBase + 'metro.png',
            size: new google.maps.Size(iconSize, iconSize),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(iconMiddle, iconSize),
            scaledSize: new google.maps.Size(iconScaled, iconScaled)
        }
    };

    var lastInfo;

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
        var position = {lat: location.lat, lng: location.lng};
        
        var marker =  new google.maps.Marker({
            position: position,
            icon: icons[location.type],
            title: location.type
        });

        var infoWindow = new google.maps.InfoWindow({
            content: location.description,
            pixelOffset: new google.maps.Size(infoOffset, 0)
        });

        marker.addListener('click', function() {
            if(lastInfo) {
                lastInfo.close();
            }
            infoWindow.open(map, marker);
            lastInfo = infoWindow;
        });

        return marker;
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: '/static/img/markerclusterer/m'});
}
// bus auto y metro

