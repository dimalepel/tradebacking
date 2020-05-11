var map;
function initMap() {
    var myLatlng_germany_pin = new google.maps.LatLng(49.477510,8.502390); //pin
    var myLatlng_germany = new google.maps.LatLng(49.477510,8.502390); //center 48.149787, 11.547047
    var myLatLng_latvia = new google.maps.LatLng(56.935845,24.102794); //56.935845, 24.102794
    var imagePath = window.location.protocol + '//' + window.location.host + '/img/custom_pin.png';
    var mapOptions_germany = {
        zoom: 17,
        center: myLatlng_germany,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    }
    var mapOptions_latvia = {
        zoom: 16,
        center: myLatLng_latvia,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    }


    var map_germany = new google.maps.Map(document.getElementById('map_germany'), mapOptions_germany);
    var map_latvia = new google.maps.Map(document.getElementById('map_latvia'), mapOptions_latvia);

    //Add Marker
    var marker_germany = new google.maps.Marker({
        position: myLatlng_germany_pin,
        map: map_germany,
        icon: imagePath,
    });
    var marker_latvia = new google.maps.Marker({
        position: myLatLng_latvia,
        map: map_latvia,
        icon: imagePath,
    });

    //Resize Function
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map_germany.getCenter();
        google.maps.event.trigger(map_germany, "resize");
        map_germany.setCenter(center);
    });
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map_latvia.getCenter();
        google.maps.event.trigger(map_latvia, "resize");
        map_latvia.setCenter(center);
    });
}

window.addEventListener('load' , function () {
   resizeRightside();
});
window.addEventListener('resize' , function () {
    resizeRightside();
});

function resizeRightside(){
    $(".rightside").each(function () {
        $output_el = $(this).data('el');
        var height = $(this).height();
        if(window.innerWidth < 576){
            // console.log(window.innerWidth);
            $($output_el).height(300);
        } else {
            $($output_el).height(height);
            // console.log("asdsadasd");
        }
    })
}