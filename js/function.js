
var stickyOffset = 5;

$(window).scroll(function(){
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();
      if (scroll >= stickyOffset) sticky.removeClass('py-3');
      else sticky.addClass('py-3');
      });

$(document).ready(function() {
        $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
            }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
        }
      });
      });

      });

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}