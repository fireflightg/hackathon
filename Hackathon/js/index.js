firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      
        var welcome = document.getElementById('welcome');
        welcome.innerText = "Welcome Back " + user.displayName;
        login.signed();
        
      // User is signed in.
    } else {
      login.start();
    }
  });
 
  var login ={
    dashboard: function(){
        window.location = "Dash.html";
    },
    start: function(){
        var Email = document.getElementById('Email');
        var password = document.getElementById('Password');
        var Confirm = document.getElementById('Confirm Password');
        var Name =  document.getElementById('Name');
        var BackButton = document.getElementById('Back');
        var dashboard = document.getElementById('dash');
        var logout = document.getElementById('logout');
        var In = document.getElementById('Sign In');
        var Up = document.getElementById('Sign Up');
        //Changes the visiblilty of an object
     Email.style.visibility = 'hidden';
     password.style.visibility = 'hidden';
     Confirm.style.visibility = 'hidden';
     Name.style.visibility = 'hidden';
     BackButton.style.display = 'none';
     dashboard.style.display = 'none';
     In.style.display = 'block';
     Up.style.display = 'block';
     logout.style.display = 'none';


    },
    back: function(){
       login.start();
    },
    signed: function(){
        var Email = document.getElementById('Email');
        var password = document.getElementById('Password');
        var Confirm = document.getElementById('Confirm Password');
        var Name =  document.getElementById('Name');
        var BackButton = document.getElementById('Back');
        var dashboard = document.getElementById('dash');
        var logout = document.getElementById('logout');
        var In = document.getElementById('Sign In');
        var Up = document.getElementById('Sign Up');
        //Changes the visiblilty of an object
     Email.style.visibility = 'hidden';
     password.style.visibility = 'hidden';
     Confirm.style.visibility = 'hidden';
     Name.style.visibility = 'hidden';
     BackButton.style.display = 'none';
     In.style.display = 'none';
     Up.style.display = 'none';
     dashboard.style.display = 'block';
     logout.style.display = 'block';


    },
    back: function(){
       login.start();
    },

    signup: function(){
        
    var email = document.getElementById('Email');
    var password = document.getElementById('Password');
    var Confirm = document.getElementById('Confirm Password');
    var Name =  document.getElementById('Name');
    var In = document.getElementById('Sign In');
    var BackButton = document.getElementById('Back');
    var emailval = email.value;
    var passval = password.value;
    var confirmval = Confirm.value;
    var nameval = Name.value;
        if(emailval == ""||passval == ""||confirmval == ""|| nameval == ""){
            Email.style.visibility = 'visible';
            password.style.visibility = 'visible';
            Confirm.style.visibility = 'visible';
            Name.style.visibility = 'visible';
            BackButton.style.display = 'block';
            In.style.display = 'none';
        }
        else{
            if(!emailval.includes('@') || emailval == undefined){
                console.log("Please enter a email");
                console.log("Signine");
            }
            if(passval.length<6 || passval == undefined){
                console.log("Please enter a password thats greater than 3 charaters"); 
                console.log("Signinp"); 
            }
            if(nameval == undefined){
                console.log("Please enter a name");
                console.log("Signine");
            }
            if(confirmval.length <6 || passval == undefined){
                console.log("Please enter a password thats greater than 3 charaters"); 
                console.log("Signinp"); 
            }
            else{
                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(() => {
              
        firebase.auth().createUserWithEmailAndPassword(emailval, passval)
  .then((user) => {
      user= user.user;
    // Signed in 
    console.log(user.uid);
    
    var uid = firebase.auth().currentUser.uid   
    console.log(user.uid);
    
    firebase.database().ref().child('User').child(uid).set({
        email: user.email,
        uid: user.uid,
        name: nameval,
        reported: ''
      });
      user.updateProfile({
        displayName: document.getElementById("Name").value
      });
      
    
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
    });
}

}
},
signin: function(){
    var email = document.getElementById('Email');
    var password = document.getElementById('Password');
    var Confirm = document.getElementById('Confirm Password');
    var Up = document.getElementById('Sign Up');
    var BackButton = document.getElementById('Back');
    var emailval = email.value;
    var passval = password.value;
    console.log("Signin");
    
        if(emailval == ""||passval == ""){
            Email.style.visibility = 'visible';
            password.style.visibility = 'visible';
            BackButton.style.display = 'block';
            Up.style.display = 'none';
        }
        else{
            console.log("Signinv");
        if(!emailval.includes('@') || emailval == undefined){
            console.log("Please enter a email");
            console.log("Signine");
        }
        if(passval.length<6 || passval == undefined){
            console.log("Please enter a password thats greater than 3 charaters"); 
            console.log("Signinp"); 
        }
        else{
            console.log("Signinok");
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {

            firebase.auth().signInWithEmailAndPassword(emailval, passval)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
      alert("Error signing in");
    var errorCode = error.code;
    var errorMessage = error.message;
  });

        
    });
}
}

},
logout: function(){
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
        window.location = "index.html";
      })
}

  }