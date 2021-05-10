var useruid;


// That's how you update the canvas, so that your //
// modification are taken in consideration //
function updateCanvas() {
    ctx.putImageData(canvasData, 0, 0);
}
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(user.uid);
        var usersuid = user.uid;
        useruid = usersuid

        var welcome = document.getElementById('welcome');
        var infoname = document.getElementById('infoname');
        var infoemail = document.getElementById('infoemail');
        infoname.innerText = user.displayName + "'s Profile";
        infoemail.innerText = user.email;
        if (user.displayName) {
            console.log(user.displayName);
            welcome.innerHTML = "Welcome Back " + user.displayName;
        } else {

            var grab = firebase.database().ref().child(user.uid);
            var databasename = grab.child("name");


            grab.on('value', snap => {
                console.log(snap.val().name());
                welcome.innerHTML = "Welcome Back " + snap.val();
            });


        }
        var grabber = firebase.database().ref().child(user.uid);
        var databa = grab.child("NearestStore").child("name");
        console.log("hello");
        var title = document.getElementById('title');

        title.innerText = user.displayName + "'s Dashboard";
        // User is signed in.
        hide.search();
        setTimeout(lis(), 3000);
        return true;

    } else {
        hide.search();
        console.log(user.uid);

    }
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

function lis() {
    console.log(useruid);
    var uid = firebase.auth().currentUser.uid;
    var getuser = firebase.database().ref().child('User')
    var uided = getuser.child(useruid);


    var getuid = uided.child('list');

    if (e == 0) {
        e = e + 1;
        getuid.once('value', snap => {
            console.log("ak");


            snap.forEach(listitem => {

                console.log(listitem.key);
                // console.log(listitem.val());
                console.log("no life");

                var li = document.createElement("tr");
                // var att = document.createAttribute("onclick"); // Create a "class" attribute
                // att.value = "pushdata.remove()";
                // li.setAttributeNode(att);

                console.log("completed");
                li.innerHTML = "<th>" + listitem.key + "</th>" + "<th>" + listitem.val() + "</th>" + "<th p class='pbutton' onclick = 'pushdata.remove()' >" + "delete" + "</th>";
                console.log("no mug");


                var l = document.getElementById('para   ').appendChild(li);



            });

            console.log("ur mom");
            console.log(e);




        });
    }
}




// var id, target, option;
// var long, lat
// navigator.geolocation.getCurrentPosition(function(position) {
//     var print = document.getElementById('print');
//     console.log(position.coords.longitude);
//     lat = position.coords.latitude;
//     long = position.coords.longitude;
//     console.log(position.coords.latitude);
//     print.innerText = "longitude: " + position.coords.longitude + "latitude: " + position.coords.latitude;


// });
// var grabber = firebase.database().ref().child(user.uid);
// var databa = grab.child("NearestStore");
// databa.on('value', snap => {
//     console.log(snap.val().lat);
//     snap.val().lat;
// });
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.rect(20, 20, position.coords.longitude, position.coords.latitude);
// ctx.stroke();

// function success(pos) {
//     var crd = pos.coords;

//     if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
//         var print = document.getElementById('print');
//         console.log('Congratulation, you reach the target');
//         print.innerText = "longitude: " + position.coords.longitude + "latitude: " + position.coords.latitude;
//         navigator.geolocation.clearWatch(id);
//     }
//     var c = document.getElementById("myCanvas");
//     var ctx = c.getContext("2d");
//     ctx.beginPath();
//     ctx.rect(20, 20, 150, 100);
//     ctx.stroke();
// };

// function error(err) {
//     console.warn('ERROR(' + err.code + '): ' + err.message);
// };

// target = {
//     latitude: lat,
//     longitude: long,
// }

// options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
// };

// id = navigator.geolocation.watchPosition(success, error, options);
// window.onload = Geo.locate();
var Geo = {

    locate: function() {
        var print = document.getElementById('print');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position.coords.longitude);
                console.log(position.coords.latitude);
                var c = document.getElementById("myCanvas");
                var ctx = c.getContext("2d");
                ctx.beginPath();
                ctx.rect(20, 20, 150, 100);
                ctx.stroke();
                print.innerText = "longitude: ud " + position.coords.longitude + "latitude: ud " + position.coords.latitude;
            });
        }
    }
}