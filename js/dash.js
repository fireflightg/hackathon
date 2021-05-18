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
        if(user.displayName){
            console.log(user.displayName);
        welcome.innerHTML = "Welcome Back " + user.displayName;
        }
        else{
        
            var grab =  firebase.database().ref().child(user.uid);
        var databasename = grab.child("name");
        

        grab.on('value',snap=>{
            console.log(snap.val().name());
            welcome.innerHTML = "Welcome Back " + snap.val();
        });
        
        
        }

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


// window.onload = function() {

// }

window.e = 0;

function lis() {
    console.log(useruid);
    var uid = firebase.auth().currentUser.uid;
    var getuser = firebase.database().ref().child('User');
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


                var l = document.getElementById('table1').appendChild(li);



            });

            console.log("ur mom");
            console.log(e);




        });
    }
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
    addlist: function() {
        console.log(useruid);
        var uid = firebase.auth().currentUser.uid;
        var getuser = firebase.database().ref().child('User')
        var uided = getuser.child(useruid);
        var listitem = document.getElementById('lister');
        var amount = document.getElementById('amount');
        var verifychildren = 0;
        var getuid = uided.child('list');
        getuid.once('value', snap => {
            verifychildren = snap.numChildren();
            console.log(verifychildren);
            if (verifychildren == 0) {
                getuid.child(listitem.value).set(amount.value);
                listitem.innerText = '';
                amount.innerText = '';

            } else {
                getuid.child(listitem.value).set(amount.value);

                var li = document.createElement("tr");
                li.innerHTML = "<th>" + listitem.value + "</th>" + "<th>" + amount.value + "</th>" + "<th>" + "x" + "</th>";
                var l = document.getElementById('table1').appendChild(li);
                listitem.value = '';
                amount.value = '';

            }
        });




    },
    remove: function() {


    }


}

function init() {
    // Clear forms here
    var listitem = document.getElementById('lister').value = "";
    var amount = document.getElementById('amount').value = "";

}
window.onload = init;
