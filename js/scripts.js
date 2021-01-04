

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


//Create Hamburger Drop Down

var dropDownMenu = document.querySelector(".navbar")
var hideMenu = document.querySelector(".ham")

ham.addEventListener("click", toggleHamburger)

function toggleHamburger(){
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
  }
