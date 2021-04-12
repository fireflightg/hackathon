var hide = {

    search: function(){
        var searchfield = document.getElementById('sea');
        var searchbutton = document.getElementById('search');
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
        $("ham").addClass("uk-animation-reverse");
        $("logo").addClass("uk-animation-reverse");
        $("search").addClass("uk-animation-reverse");

    }

}