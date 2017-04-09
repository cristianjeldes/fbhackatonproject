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

function getData() {
    var locations = [
        {lat: -33.53962814, lng: -70.82225783, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.5836362, lng: -70.88320236, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.65209667, lng: -70.68237647, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.39819021, lng: -70.87613511, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.51987022, lng: -70.42634667, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.34056137, lng: -70.71182938, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.40188161, lng: -70.49145021, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.30508386, lng: -70.46758236, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.41109862, lng: -70.8595876, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.27083438, lng: -70.72290721, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.64975669, lng: -70.55745483, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.55288253, lng: -70.70916383, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.53457576, lng: -70.81229268, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.32281274, lng: -70.80180335, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.29188406, lng: -70.55202989, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.49318543, lng: -70.590794, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.43326133, lng: -70.7357811, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.62891461, lng: -70.69584531, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.46989888, lng: -70.76823771, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.45854567, lng: -70.69668717, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.56679625, lng: -70.76991592, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.4203506, lng: -70.60919374, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.64590176, lng: -70.67466262, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.32795032, lng: -70.64842035, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.41445146, lng: -70.70050442, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.34571829, lng: -70.70476096, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.48870158, lng: -70.8520831, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.56629187, lng: -70.67169198, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.6162611, lng: -70.78646271, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.32430009, lng: -70.71352407, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.43273563, lng: -70.49390428, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.49255358, lng: -70.77943446, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.40716199, lng: -70.73850852, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.32696196, lng: -70.65374679, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.54375001, lng: -70.84628971, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.53539509, lng: -70.8735521, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.53718312, lng: -70.50066916, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.48225971, lng: -70.66883177, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.32351359, lng: -70.67025419, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.24814941, lng: -70.74369705, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.36427156, lng: -70.59065897, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.4682186, lng: -70.45941128, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.3795523, lng: -70.53888484, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.39607772, lng: -70.52434917, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.50394671, lng: -70.66338534, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.54883482, lng: -70.50400638, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.32954507, lng: -70.76439405, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.54339686, lng: -70.73536021, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.50729819, lng: -70.83444281, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.64958201, lng: -70.76184767, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.29259446, lng: -70.60303351, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.46121679, lng: -70.81816593, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.42450825, lng: -70.67755878, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.47350552, lng: -70.58834828, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.33910416, lng: -70.88851408, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.43954325, lng: -70.53756903, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.50011445, lng: -70.90334576, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.57099192, lng: -70.8890979, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.47120149, lng: -70.8940677, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.3346591, lng: -70.63890994, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.47438055, lng: -70.72148974, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.38873667, lng: -70.69289643, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.31362384, lng: -70.58156216, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.49555417, lng: -70.45032453, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.29060216, lng: -70.61108852, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.34864943, lng: -70.87337037, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.51007829, lng: -70.87212749, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.53083207, lng: -70.7928852, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.42204206, lng: -70.48797325, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.25773658, lng: -70.78361273, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.47228277, lng: -70.92177284, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.30746762, lng: -70.68001375, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.36363395, lng: -70.82556003, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.47303804, lng: -70.63842223, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.48431467, lng: -70.45318334, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.44888208, lng: -70.5018882, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.56392594, lng: -70.89568157, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.56927634, lng: -70.62925598, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.4873984, lng: -70.71169718, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.35374652, lng: -70.47714685, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.34887361, lng: -70.6709573, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.33038852, lng: -70.76301364, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.41270416, lng: -70.5459498, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.38459789, lng: -70.53201017, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.44565823, lng: -70.90815198, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.4401865, lng: -70.48408455, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.66876172, lng: -70.71315669, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.39738667, lng: -70.41709884, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.56427334, lng: -70.47551666, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.54234808, lng: -70.57767327, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.41145024, lng: -70.5899521, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.54907541, lng: -70.72695506, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.65783597, lng: -70.70685288, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.24919615, lng: -70.6404279, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.31895877, lng: -70.71909283, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.4551939, lng: -70.47666504, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.52567638, lng: -70.79822998, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.66228025, lng: -70.59905909, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.37053829, lng: -70.5520489, type: 'bus', description: '<div class="info">Bus</div>'},
        {lat: -33.57212596, lng: -70.81216978, type: 'bus', description: '<div class="info">Bus</div>'}
    ];
    return locations;
}
