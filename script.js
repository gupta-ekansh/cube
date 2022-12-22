var clicked = false;
var button = document.getElementById("break");
var hide = document.getElementById("hidden");

function myFunction1(){
    button.style.zIndex = "0";
    hide.style.zIndex = "1";
}
function myFunction2(){
    button.style.zIndex = "1";
    hide.style.zIndex = "0";
}

