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
        var grabber =  firebase.database().ref().child(user.uid);
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