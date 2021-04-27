var useruid;
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
        welcome.innerHTML = "Welcome Back " + user.displayName;

        var title = document.getElementById('title');
        title.innerText = user.displayName + " Dashboard";
        // User is signed in.
        setTimeout(lis(), 3000);

    } else {
        console.log(user.uid);

    }
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});


// window.onload = function() {

// }


function lis() {
    console.log(useruid);
    var uid = firebase.auth().currentUser.uid;
    var getuser = firebase.database().ref().child('User')
    var uided = getuser.child(useruid);


    var getuid = uided.child('list');
    getuid.on('value', snap => {
        console.log("ak");

        snap.forEach(listitem => {
            console.log(listitem.key);
            console.log(listitem.val());
            var li = document.createElement("tr");

            console.log("completed");
            li.innerHTML = "<th>" + listitem.key + "</th>" + "<th>" + listitem.val() + "</th>" + "<th>" + "None" + "</th>";



            var l = document.getElementById('table1').appendChild(li);

        });




    });
}

var pushdata = {

    upload: function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");

        }

        function showPosition(position) {
            console.log(position.coords.longitude);
            console.log(position.coords.latitude);
            lng = position.coords.longitude;
            lat = position.coords.latitude;
            var problemname = document.getElementById('problem').value;

            //var danger = document.getElementById('dager');
            var pname = problemname.value;
            var uid = firebase.auth().currentUser.uid;
            var name = firebase.auth().currentUser.displayName;
            //var dangerval = danger.value; 
            var problem = document.getElementById("Desc").value;

            console.log(uid, name, pname, problem, lng);
            console.log(problemname.replace(' ', ''));
            var prob = problemname.replace(/\s/g, '')
            var ee = firebase.database().ref().child('Problems')

            ee.once('value', function(snapshot) {
                if (snapshot.hasChild(prob)) {
                    ee.child(prob).update({
                        uid: uid,
                        name: name,
                        problem: problemname,
                        desc: problem,
                        log: lng,
                        lat: lat




                    });
                } else {
                    firebase.database().ref().child('locations').child(prob).set({
                        long: lng,
                        lat: lat
                    })
                    ee.child(prob).set({
                        uid: uid,
                        name: name,
                        problem: problemname,
                        desc: problem,
                        log: lng,
                        lat: lat




                    });

                }
            });

        }
    },
    getlist: function() {
        var uid = firebase.auth().currentUser.uid;
        console.log(uid);


    }


}