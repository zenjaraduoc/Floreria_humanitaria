function initMap(){
    var location = {lat:-36.78923311363644, lng: -73.05154091665084};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 5,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}