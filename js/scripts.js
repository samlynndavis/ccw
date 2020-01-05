barba.init({
    transitions: [{
        name: "switch",
        once({
            current,
            next,
            trigger
        }) {
            return new Promise(resolve => {
                const timeline = gsap.timeline({
                    onComplete() {
                        resolve();
                    }
                });

                gsap.set(".reveal-text", {
                    opacity: 0
                }, 0)
                gsap.set(".reveal-text-two", {
                    opacity: 0
                }, 0)
                gsap.set(".reveal", {
                    opacity: 1,
                    y: "0%"
                }, 0)
                gsap.set(".hidetext", {
                    opacity: 0,
                    y: "110%"
                });
                gsap.set(".home", {
                    y: "20%"
                }, 0);
                gsap.set("#desktop", {
                    y: "-100px"
                });

                timeline
                    .to(".reveal-text", {
                        duration: 2,
                        opacity: "1",
                        ease: Power4.easeInOut,
                    }, 0)
                    .to(".reveal-text-two", {
                        duration: 2,
                        opacity: "1",
                        ease: Power4.easeInOut,
                        delay: 1.5
                    }, 0)
                    .to(".reveal", {
                        duration: 1.5,
                        y: "-100%",
                        ease: Power4.easeInOut,
                        delay: 3
                    }, 0)
                    .to(".home", {
                        duration: 1.5,
                        y: "0%",
                        ease: Power4.easeInOut,
                        delay: 2.9
                    }, 0)
                    .to(".hidetext", 1.5, {
                        opacity: 1,
                        y: "0%",
                        ease: Power4.easeOut
                    }, 0.15)
                    .to("#desktop", {
                        duration: 0.8,
                        y: "0px",
                        ease: Power4.easeOut,
                        delay: 4
                    }, 0)
            });
        }
    }],
    debug: true
});


$(".photo-caption").lettering('lines').children('span').lettering('words').children('span').lettering();

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
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

// const slider = document.querySelector('.roster');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });

// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });

// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = x - startX;
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });

// $(document).ready(function(){
// 	$('#nav-icon').click(function(){
// 		$('#mobile-nav').toggleClass('open');
// 	});
// });

var Scrollbar = window.Scrollbar;

Scrollbar.init(document.querySelector('#my-scrollbar'));


// init controller
var controller = new ScrollMagic.Controller();

// loop through all elements
$('.fade-up').each(function () {

    // build a tween
    var fadeTween = TweenMax.from($(this), 1, {
        opacity: "0",
        ease: Power4.out
    });

    // build a scene
    var scene = new ScrollMagic.Scene({
            triggerElement: this
        })
        .setTween(fadeTween) // trigger a TweenMax.to tween
        .addTo(controller);

});

var rosterTween = new TweenMax.from('#roster', 1, {
    opacity: "0",
    ease: Power4.easeInOut
});

// var overviewTween = new TweenMax.from('#overview', 2, {
//     opacity: "0",
//     y: "20%",
//     ease: Power4.easeOut,
//     delay: 0.2
// });

var containerScene = new ScrollMagic.Scene({
        triggerElement: '#roster'
    })
    .setTween(rosterTween)
    // .addIndicators()
    .addTo(controller);

// var introScene = new ScrollMagic.Scene({
//         triggerElement: '#intro'
//     })
//     .setTween(overviewTween)
//     .addIndicators()
//     .addTo(controller);

// var toggleMenu = $('.hamburger');
// var closeMenu = $('.close');
// var menu = $('#mobile-nav-wrapper');
// var listItems = $('ul#mobile-nav li');
// var timeline = new TimelineMax({ paused: true, reversed: true });

// timeline.to(menu, 0.8, { opacity: "1", y: "0%", ease: Power4.easeInOut});

// toggleMenu.on('click', function() {
//   $(menu).toggleClass('on');
//   timeline.reversed() ? timeline.play() : timeline.reverse();
// });

// closeMenu.on('click', function() {
//   $(menu).toggleClass('on');
//   timeline.play() ? timeline.reversed() : timeline.play();
// });