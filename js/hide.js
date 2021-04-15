var hide = {

    search: function(){
        var searchfield = document.getElementById('sea');
        var searchbutton = document.getElementById('search');
        var logo = document.getElementById('logo');
        var ham = document.getElementById('ham');
        searchfield.style.display = 'none';
        searchbutton.style.display = 'block';
        logo.style.display = 'block';
        ham.style.display = 'block';
    },
    whilesearch: function (){
        var searchbutton = document.getElementById('search');
        var searchfield = document.getElementById('sea');
        var logo = document.getElementById('logo');
        var ham = document.getElementById('ham');
        
        searchfield.style.display = 'block';
        searchbutton.style.display = 'none';
        logo.style.display = 'none';
        ham.style.display = 'none';
     

    },
    checklist: function(){
        var uid = firebase.auth().currentUser.uid; 
        console.log(uid);
        console.log("gottem");
        var mainacct = firebase.database().ref().child(uid);
        var def = mainacct.child("list")
        def.on('value', snap => {
          var list = snap.val();
        });
        console.log(list);
        
      }

}