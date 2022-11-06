let myHeading = document.querySelector("h1");

window.onload=function(){
    var bouton = document.getElementById('divForm');
    var nav = document.getElementById('nav');
    bouton.onclick = function(e){
        if(nav.style.display=="block"){
            nav.style.display="none";
        }else{
            nav.style.display="block";
        }
    };
};