document.addEventListener('DOMContentLoaded', function(){

    //modification lien des menu au click
    var ulMenu = document.getElementById("ulMenu");
    ulMenu.children[1].children[0].children[1].style.backgroundColor = '#ffffff';
    ulMenu.children[1].children[0].children[0].style.display = 'block';
    ulMenu.children[1].children[0].style.cursor ='default';
    for (i = 0; i < ulMenu.childElementCount; i++) {
        ulMenu.children[i].addEventListener("mouseover", over);
    };
    function over() {
        for (i = 0; i < ulMenu.childElementCount; i++) {
            ulMenu.children[i].children[0].children[1].style.backgroundColor = 'transparent';
        };
        var li = document.getElementById(this.id);
        li.children[0].children[1].style.backgroundColor = '#ffffff';
    }
    //fin modification lien des menu au click et hover

    //icone pour écran petite taille
    var icone = document.getElementById("icone");
    icone.onclick = function() {
        var menu = document.getElementById("menu");
        if (menu.style.display == 'block'){
            menu.style.display = 'none';
        }else{
            menu.style.display = 'block';
        }
    };
    window.onresize = function(){
        if(document.body.clientWidth > 750){
            menu.style.display = 'block';
        }
    }
    // fin icone pour écran petite taille

}, false) ;