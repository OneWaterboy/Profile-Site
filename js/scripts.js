

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
  var navbar = getElementById.getElementById("mainNav")
  if (codeButton.style.display = "block"){
    navBar.style.backgroundColor = rgba(0,0,0,0.9);
  }
}
