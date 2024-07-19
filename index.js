var seccontent = document.getElementsByClassName("sec_content");
var seccontents = document.getElementsByClassName("sec_contents");

function openbar(argname){

    for(item of seccontent){
        item.classList.remove("active");
    }

    for(items of seccontents){
        items.classList.remove("active_content");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(argname).classList.add("active_content");
}

var sidemenu = document.getElementById("header_menu");
function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}