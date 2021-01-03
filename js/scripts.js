

// Change navbar color on scroll

$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 0) {
          $(".mainNav").addClass(".changeColor")
       } else {
          $(".mainNav").removeClass(".changeColor")
       }
    });
 });