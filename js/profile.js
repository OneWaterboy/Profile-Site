

// Change navbar color on scroll

$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
          $(‘mainNav’).addClass(‘changeColor’)
       } else {
          $('mainNav').removeClass(‘changeColor’)
       }
    });
 });