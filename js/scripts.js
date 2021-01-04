

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

