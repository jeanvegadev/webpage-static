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

// Animación de los números
document.addEventListener("DOMContentLoaded", function() {
  elements = document.querySelectorAll(".counter");
  const speed = 200;
  elements.forEach( counter => {
    const animate = () => {
      const value = counter.getAttribute('akhi');
      const data = +counter.innerText;
      const time = value / speed;
      if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
      }else{
          counter.innerText = value;
      }
    }
    animate();
    });
  });

// Apega la barra de inicio hacia arriba cuando la página se mueve hacia abajo
window.addEventListener('scroll', function(e){
    let stickyOffset = 5;
    let sticky = document.querySelector(".sticky"),
    scroll = window.scrollY;
    if (scroll >= stickyOffset) sticky.classList.remove('py-3');
    else sticky.classList.add('py-3');
  });