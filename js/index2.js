// function bob() { 
//     var print = document.getElementById('print');
//     navigator.geolocation.getCurrentPosition(function(position) { 
//         console.log(position.coords.longitude);
//         console.log(position.coords.latitude);
//         print.innerText = "longitude: " + position.coords.longitude + "latitude: " + position.coords.latitude;
//     });
//     setTimeout(bob, 2000);
// } 
var id, target, option;
var long,lat
navigator.geolocation.getCurrentPosition(function(position) {
    var print = document.getElementById('print'); 
    console.log(position.coords.longitude);
     lat = position.coords.latitude;
     long =  position.coords.longitude;
    console.log(position.coords.latitude);
    print.innerText = "longitude: " + position.coords.longitude + "latitude: " + position.coords.latitude;
});
function success(pos) {
  var crd = pos.coords;
 
  navigator.geolocation.getCurrentPosition(function(position) {
    var print = document.getElementById('print'); 
    console.log(crd.longitude);
     lat = crd.latitude;
     long =  crd.longitude;
    console.log(crd.latitude);
    print.innerText = "longitude: " + position.coords.longitude + "latitude: " + position.coords.latitude;
});
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

target = {
  latitude : lat,
  longitude: long,
}

options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options); 
var Geo = {

locate: function(){
   var print = document.getElementById('print');
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(function(position) { 
            console.log(position.coords.longitude);
            console.log(position.coords.latitude);
            print.innerText = "longitude: ud " + position.coords.longitude + "latitude: ud " + position.coords.latitude;
        });
    }  
}



}

