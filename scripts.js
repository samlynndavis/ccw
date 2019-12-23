barba.init({
  transitions: [
    {
      name: "switch",
      once({ current, next, trigger }) {
        return new Promise(resolve => {
          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          });

		  // gsap.set(".hidetext", { y: "100%" });
      gsap.set("body", { opacity: 0});
      gsap.set("header", { y: "-50px"});

		  timeline
		  .to("body", { duration: 2, opacity: 1, ease: Power4.easeOut, delay: 0.5})
      // .to(".hidetext", { duration: 2, y: "0%", ease: Power4.easeOut})
      .to("header", { duration: 1, y: "0px", ease: Power4.easeOut, delay: 0.8}, 0)
		  
        });
      }
    }
  ],
  debug: true
});

// function makeMarquee () {
//   const title = ' Mia Gholar. Elizabeth De La Piedra. Laura Sophia Cardozo. Anna Michal Paul. Nev Rosales.'
//   const marqueeText = new Array(1000).fill(title).join('')

//   document.querySelector('.marquee span').innerHTML = marqueeText
// }

// makeMarquee()

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

dragElement(document.getElementById("drag-image"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const grabber = document.querySelector('#drag-image');

grabber.addEventListener('mousedown', () => {
  isDown = true;
  grabber.classList.add('active');
});

grabber.addEventListener('mouseleave', () => {
  isDown = false;
  grabber.classList.remove('active');
});

grabber.addEventListener('mouseup', () => {
  isDown = false;
  grabber.classList.remove('active');
});

const slider = document.querySelector('.roster');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

