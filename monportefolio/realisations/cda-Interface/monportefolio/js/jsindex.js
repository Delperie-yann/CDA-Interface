document.addEventListener('DOMContentLoaded', function(){

    //choix des petits projets par 3
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");

    var visible1 = document.getElementsByClassName("visible1");
    var visible2 = document.getElementsByClassName("visible2");
    var visible3 = document.getElementsByClassName("visible3");

    a1.style.backgroundColor = " white";

    a1.addEventListener("click", () => {
        for (var i = 0; i < visible1.length; i += 1) {
            visible1[i].style.display = 'block';
            visible2[i].style.display = 'none';
            visible3[i].style.display = 'none';
        }
        a1.style.backgroundColor = "white";
        a2.style.backgroundColor = "transparent";
        a3.style.backgroundColor = "transparent";

    });
    a2.addEventListener("click", () => {
        for (var i = 0; i < visible1.length; i += 1) {
            visible1[i].style.display = 'none';
            visible2[i].style.display = 'block';
            visible3[i].style.display = 'none';
        }
        a1.style.backgroundColor = "transparent";
        a2.style.backgroundColor = "white";
        a3.style.backgroundColor = "transparent";
    });
    a3.addEventListener("click", () => {
        for (var i = 0; i < visible1.length; i += 1) {
            visible1[i].style.display = 'none';
            visible2[i].style.display = 'none';
            visible3[i].style.display = 'block';
        }
        a1.style.backgroundColor = "transparent";
        a2.style.backgroundColor = "transparent";
        a3.style.backgroundColor = "white";
    });
    //fin choix des petits projets par 3

    //modification lien des menu au click
    var ulMenu = document.getElementById("ulMenu");
    ulMenu.children[0].children[0].children[1].style.backgroundColor = '#ffffff';
    ulMenu.children[0].children[0].children[0].style.display = 'block';
    for (i = 0; i < ulMenu.childElementCount; i++) {
        ulMenu.children[i].addEventListener("click", menu);
    };
    function menu() {
        for (i = 0; i < ulMenu.childElementCount; i++) {
            ulMenu.children[i].children[0].children[1].style.backgroundColor = 'transparent';
            ulMenu.children[i].children[0].children[0].style.display = 'none';
        };
        var li = document.getElementById(this.id);
        li.children[0].children[1].style.backgroundColor = '#ffffff';
        li.children[0].children[0].style.display = 'block';
    };
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
    //fin modification lien des menu au click

    // modification lien menu au scroll de la page
    var section = document.getElementsByTagName("section");
    var sections = {};
    var sectionsId = {};
    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
        sectionsId[e.offsetTop] = e.id;
    });
    window.onscroll = function () {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        for (i in sections) {
            if (sections[i] <= scrollPosition + 50) {
                for (j in sectionsId) {
                    if (i == sectionsId[j]) {
                        for (k = 0; k < ulMenu.childElementCount; k++) {
                            ulMenu.children[k].children[0].children[1].style.backgroundColor = 'transparent';
                            ulMenu.children[k].children[0].children[0].style.display = 'none';
                        };
                        var a = document.querySelector('a[href*=' + sectionsId[j] + ']');
                        if (a != null) {
                            //console.log(a.parentElement.id);
                            li = document.getElementById(a.parentElement.id);
                            li.children[0].children[1].style.backgroundColor = '#ffffff';
                            li.children[0].children[0].style.display = 'block';
                        } else {
                            ulMenu.children[0].children[0].children[1].style.backgroundColor = '#ffffff';
                            ulMenu.children[0].children[0].children[0].style.display = 'block';
                        }
                    }
                }
            }else{
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    for (k = 0; k < ulMenu.childElementCount; k++) {
                        ulMenu.children[k].children[0].children[1].style.backgroundColor = 'transparent';
                        ulMenu.children[k].children[0].children[0].style.display = 'none';
                    };
                    li = document.getElementById("cont");
                    li.children[0].children[1].style.backgroundColor = '#ffffff';
                    li.children[0].children[0].style.display = 'block';
                }else{
                    if(window.scrollY == 0){
                        for (k = 0; k < ulMenu.childElementCount; k++) {
                            ulMenu.children[k].children[0].children[1].style.backgroundColor = 'transparent';
                            ulMenu.children[k].children[0].children[0].style.display = 'none';
                        };
                        li = document.getElementById("home");
                        li.children[0].children[1].style.backgroundColor = '#ffffff';
                        li.children[0].children[0].style.display = 'block';
                    }
                }
            }
        }
    };
    // fin modification lien menu au scroll de la page

    //icone pour écran petite taille
    var icone = document.getElementById("icone");
    var menu = document.getElementById("menu");
    icone.onclick = function() {
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
    // Fin icone pour écran petite taille

    // changement image haut
    var flechedroite = document.getElementById('flecheDroite');
    var flechegauche = document.getElementById('flecheGauche');
    var play = document.getElementById('play');
    var images= ["./images/slide_1.jpg", "./images/slide_2.jpg", "./images/slide_3.jpg"];
    images.forEach(function(img){
        new Image().src = img; 
    });
    var anim = document.getElementById('sectionHaut');
    var nImage = 1;
    var intervalFond =setInterval(function animfond(){
        nImage++;
        if(nImage == images.length){
            nImage = 0;
        } 
        anim.style.backgroundImage= "url('" + images[nImage] + "')";
    }, 5000);
    flechedroite.onclick =function(){
        play.style.display = 'block';
        clearInterval(intervalFond);
        nImage++;
        if(nImage == images.length){
            nImage = 0;
        } 
        anim.style.transition = '1s';
        anim.style.backgroundImage = "url('" + images[nImage] + "')";
    }
    flechegauche.onclick =function(){
        play.style.display = 'block';
        clearInterval(intervalFond);
        nImage--;
        if(nImage < 0){
            nImage = images.length -1;
        } 
        anim.style.transition = '1s';
        anim.style.backgroundImage = "url('" + images[nImage] + "')";
    }
    play.onclick =function(){
        intervalFond =setInterval(function animfond(){
            nImage++;
            if(nImage == images.length){
                nImage = 0;
            } 
            anim.style.backgroundImage= "url('" + images[nImage] + "')";
        }, 5000);
        play.style.display = 'none';
    }
    var learnMore = document.querySelector('#sectionHaut').querySelector("#more");
    learnMore.style.cursor ='pointer';
    learnMore.onclick = function(){
        document.location.href="bigprojet.html#grosprojets" + (nImage + 1 );
    }
    // Fin changement image haut

}, false) ;