

// Change navbar color on scroll

$(document).ready(function(){
	$(window).on("scroll",function(){
  	var navChange = $(window).scrollTop();
    if(navChange > 75){
        $(".mainNav").css("background","rgba(0,0,0)");
    }
    else{
    	$(".mainNav").css("background","rgba(0,0,0,0)");
    }
  });
});


//Create Mobile Menu

function toggleMenu () {
  var codeButton = document.getElementById("sideBar");
  if (codeButton.style.display === "none") {
    codeButton.style.display = "block";
  } else {
    codeButton.style.display = "none";
  }
}


//Main Page load overlay text effect

var i = 0;
var t = 0;
var heading = 'Hi! I\'m Abrahm';
var speed = 100; 

function typeText() {
  if (i < heading.length) {
    document.getElementById('overlay-header').innerHTML += heading.charAt(i);
    i++;
    setTimeout(typeText, 200);
  }
  $('#overlay-tagline').fadeIn(slow);
}


//homepage buttons for navigation

