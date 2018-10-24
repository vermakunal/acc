const setting =
{
    nav: false,
}
function Toggle() {
    var toggler = document.getElementById("toggler");
    var sidenav = document.getElementById("sidenav");
    sidenav.classList.toggle("nav_open");
    document.getElementById("main").classList.toggle("main_open");
    toggler.classList.toggle("togggler_left");
    if  ( sidenav.classList.contains("nav_open")){ toggler.innerHTML = '&#xe079;' 
    $(".overs").css("overflow","scroll")

}
    else{ toggler.innerHTML = "&#xe080;"
    $(".overs").css("overflow","visible")

}
  
}
window.onload = function() {

      Toggle();
}
const dark=
{
    '--prm':'#9c27b0',
    '--tcc':'white',
    '--bgg':'#424242',
    '--sbgg':'#424242',
    '--stcc':'white'
 
};
const white=
{
    '--prm':'#3f51b5',
    '--tcc':'#303030',
    '--bgg':'white',
    '--sbgg':'#3f51b5',
    '--stcc':'white'

};
function flipcolor(t)
{
if(t.checked)
{
    manageColor(dark) 
}
else
{
    manageColor(white) 
}
    
}

function manageColor(obb) 
{
    for (const key in obb) {
        console.log(key.toString())
    document.documentElement.style.setProperty(key.toString(), obb[key].toString());
       
    }
    
}
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 512 || document.documentElement.scrollTop > 512) {
        document.getElementById("tops").style.position = "fixed";
    } else {
        document.getElementById("tops").style.position = "static";
    }
}
