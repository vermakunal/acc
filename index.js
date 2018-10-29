const setting =
{
    nav: false,
    t:false
}
function Toggle() {
    var toggler = document.getElementById("toggler");
    var sidenav = document.getElementById("sidenav");
    sidenav.classList.toggle("nav_open");
    document.getElementById("main").classList.toggle("main_open");
    toggler.classList.toggle("togggler_left");
    if  ( sidenav.classList.contains("nav_open")){ toggler.innerHTML = '&#xe079;' 
}
    else{ toggler.innerHTML = "&#xe080;"
    $(".overs").css("overflow","visible")

}
  
}
window.onload = function() {

      Toggle();
      
$(".rip").click(function (e) {
  
    $(".ripple").remove();
    var posX = $(this).offset().left,
        posY = $(this).offset().top,
        buttonWidth = $(this).width(),
        buttonHeight =  $(this).height();
    $(this).prepend("<span class='ripple'></span>");
   // Make it round!
    if(buttonWidth >= buttonHeight) {
      buttonHeight = buttonWidth;
    } else {
      buttonWidth = buttonHeight; 
    }
    
    // Get the center of the element
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;
    
   
    // Add the ripples CSS and start the animation
    $(".ripple").css({
      width: buttonWidth,
      height: buttonHeight,
      top: y + 'px',
      left: x + 'px'
    }).addClass("rippleEffect");
  });
  mobileSet();
  Setplayer();



}
function mobileSet(){
    if(innerWidth<500)
    {
        vt=vt.replace("[[width]]",window.innerWidth);
        options.width=this.innerWidth*0.9;
        options.height=this.innerHeight*0.5;
    }
    else
    {
        vt=vt.replace("[[width]]","");
    }
 
}
const dark=
{
    '--bdr': '#9c27b0',
    '--prm':'#9c27b0',
    '--tcc':'white',
    '--bgg':'#424242',
    '--sbgg':'#424242',
    '--stcc':'white',
    '--bdr':'#9c27b0'
 
};
const white=
{
    '--bdr': '#fff',
    '--prm':'#3f51b5',
    '--tcc':'#303030',
    '--bgg':'white',
    '--sbgg':'#3f51b5',
    '--stcc':'white',
    ' --bdr':'white'

};
function flipcolor()
{
  
if(setting.t)
{
    manageColor(dark) ;
    setting.t=false;
}
else
{
    manageColor(white) ;
    setting.t=true;


}
    
}

function manageColor(obb) 
{
    for (const key in obb) {
    document.documentElement.style.setProperty(key.toString(), obb[key].toString());
       
    }
    
}

function removeplayer()
{
    document.querySelector("#playes").remove();
}

var vt=`
<div>
     <video width="[[width]]"   controls>
             <source onerror="this.src='https://www.w3schools.com/html/mov_bbb.mp4'" src="[[src]]" type="video/mp4">
             Your browser does not support HTML5 video/Or you do not have access.
         </video>
</div>
<div id="quitplayer" onclick="removeplayer()" ><span class="glyphicon glyphicon-remove"></span></div>  
`;

function Setplayer()
{
  
    $(".vids>li>div").click(function () 
    {
     var u=   this.getAttribute("data-url")
        var _vt=vt.replace("[[src]]",u);
        var e=document.createElement("div");
        e.id="playes";
        e.innerHTML=_vt;
        document.querySelector("#_ee").appendChild(e);
    });
}