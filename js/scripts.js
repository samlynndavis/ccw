const runScripts = () => {

    // document.addEventListener("DOMContentLoaded", function(event) {
 
    //     var gallery = document.querySelector('.gallery');
    //     var flkty = new Flickity( gallery, {
    //       imagesLoaded: true,
    //       percentPosition: false,
    //       cellAlign: 'left',
    //       pageDots: false,
    //       wrapAround: true
    //     } );
    //     var button = document.querySelector('.button--resize');
       
    //     button.addEventListener( 'click', function() {
    //       gallery.classList.toggle( 'is-expanded' );
    //       flkty.resize();
    //     });
       
    //    });
       
    const openAbout = $('#about');
    const closeAbout = $('#close');

    
    gsap.set(".about", {y: "100%"})
    gsap.set("#close", {opacity: 0})
    gsap.set(".blurb", {y: "40%", opacity: 0})
    
    const timeline = new TimelineMax({
        paused: true,
        reversed: true,
        onComplete: function () {        
            $("body").addClass('noscroll');
        },
        onReverseComplete: function () {
            $("#teambio").removeClass('active');
        }
    });
    
    timeline
        .to(".about", 1, {y: "0%", ease: Power4.easeInOut})
        .to(".blurb", 1, {opacity: 1, ease:Power4.easeInOut, delay: 0.5}, 0)
        .to("#close", 0.5, {opacity: 1, ease: Power4.easeInOut, delay: 0.8}, 0);
    
    $(document).on('click', "#about", function () {
        $(".about").addClass('active');
        timeline.reversed() ? timeline.play() : timeline.reverse();
    });
    
    $(document).on('click', "#close", function () {
        $("body").removeClass('noscroll');
        timeline.reversed() ? timeline.play() : timeline.reverse();
    });
    
    // Hide Header on on scroll down
    let didScroll;
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = $('header').outerHeight();
    
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
        let st = $(this).scrollTop();
    
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
    
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
            // $('footer').addClass('hide');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
                // $('footer').removeClass('hide');
            }
        }
    
        lastScrollTop = st;
    }
    
    //Drag intro image around screen
    
    // dragElement(document.getElementById("drag-image"));
    
    // function dragElement(elmnt) {
    //     var pos1 = 0,
    //         pos2 = 0,
    //         pos3 = 0,
    //         pos4 = 0;
    //     if (document.getElementById(elmnt.id + "header")) {
    //         // if present, the header is where you move the DIV from:
    //         document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    //     } else {
    //         // otherwise, move the DIV from anywhere inside the DIV:
    //         elmnt.onmousedown = dragMouseDown;
    //     }
    
    //     function dragMouseDown(e) {
    //         e = e || window.event;
    //         e.preventDefault();
    //         // get the mouse cursor position at startup:
    //         pos3 = e.clientX;
    //         pos4 = e.clientY;
    //         document.onmouseup = closeDragElement;
    //         // call a function whenever the cursor moves:
    //         document.onmousemove = elementDrag;
    //     }
    
    //     function elementDrag(e) {
    //         e = e || window.event;
    //         e.preventDefault();
    //         // calculate the new cursor position:
    //         pos1 = pos3 - e.clientX;
    //         pos2 = pos4 - e.clientY;
    //         pos3 = e.clientX;
    //         pos4 = e.clientY;
    //         // set the element's new position:
    //         elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    //         elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    //     }
    
    //     function closeDragElement() {
    //         // stop moving when mouse button is released:
    //         document.onmouseup = null;
    //         document.onmousemove = null;
    //     }
    // }
    
    // //toggle 'grab" and 'grabbing' cursors on mousedown and leave
    
    // const grabber = document.querySelector('#drag-image');
    
    // grabber.addEventListener('mousedown', () => {
    //     isDown = true;
    //     grabber.classList.add('active');
    // });
    
    // grabber.addEventListener('mouseleave', () => {
    //     isDown = false;
    //     grabber.classList.remove('active');
    // });
    
    // grabber.addEventListener('mouseup', () => {
    //     isDown = false;
    //     grabber.classList.remove('active');
    // });
    
    // //Roster Slider
    
    // // const slider = document.querySelector('.roster');
    // // let isDown = false;
    // // let startX;
    // // let scrollLeft;
    
    // // slider.addEventListener('mousedown', (e) => {
    // //   isDown = true;
    // //   slider.classList.add('active');
    // //   startX = e.pageX - slider.offsetLeft;
    // //   scrollLeft = slider.scrollLeft;
    // // });
    
    // // slider.addEventListener('mouseleave', () => {
    // //   isDown = false;
    // //   slider.classList.remove('active');
    // // });
    
    // // slider.addEventListener('mouseup', () => {
    // //   isDown = false;
    // //   slider.classList.remove('active');
    // // });
    
    // // slider.addEventListener('mousemove', (e) => {
    // //   if(!isDown) return;
    // //   e.preventDefault();
    // //   const x = e.pageX - slider.offsetLeft;
    // //   const walk = x - startX;
    // //   slider.scrollLeft = scrollLeft - walk;
    // //   console.log(walk);
    // // });
    
    // // $(document).ready(function(){
    // // 	$('#nav-icon').click(function(){
    // // 		$('#mobile-nav').toggleClass('open');
    // // 	});
    // // });
    
    
    // init controller
    var controller = new ScrollMagic.Controller();
    
    // loop through all elements
    $('.fade-up').each(function () {
    
        // build a tween
        var fadeTween = TweenMax.from($(this), 1.2, {opacity: "0", ease: Power4.easeInout});
    
        // build a scene
        var scene = new ScrollMagic.Scene({
                triggerElement: this
            })
            .setTween(fadeTween) // trigger a TweenMax.to tween
            .addTo(controller);
    
    });
    
    // var rosterTween = new TweenMax.from('#roster', 1, {
    //     opacity: "0",
    //     ease: Power4.easeInOut
    // });
    
    // // var overviewTween = new TweenMax.from('#overview', 2, {
    // //     opacity: "0",
    // //     y: "20%",
    // //     ease: Power4.easeOut,
    // //     delay: 0.2
    // // });
    
    // var containerScene = new ScrollMagic.Scene({
    //         triggerElement: '#roster'
    //     })
    //     .setTween(rosterTween)
    //     // .addIndicators()
    //     .addTo(controller);
    
    // var introScene = new ScrollMagic.Scene({
    //         triggerElement: '#intro'
    //     })
    //     .setTween(overviewTween)
    //     .addIndicators()
    //     .addTo(controller);
    
    var openMenu = $('.hamburger');
    var closeMenu = $('.close');
    var menu = $('#mobile-nav-wrapper');
    // var listItems = $('ul#mobile-nav li');
    var timelineMobile = new TimelineMax({ 
        paused: true, 
        reversed: true,
        onReverseComplete: function () {
            $(menu).removeClass('on');
            $("body").removeClass('noscroll');
        }
        
     });
    
    gsap.set("#mobile-nav-wrapper", {
        y: "100%"
    })
    
    timelineMobile
        .to(menu, 1, { y: "0%", ease: Power4.easeInOut});
    
    $(openMenu).on('click', function () {
      $(menu).toggleClass('on');
      $("body").addClass('noscroll');
      timelineMobile.reversed() ? timelineMobile.play() : timelineMobile.reverse();
    });
      
    $(closeMenu).on('click', function () {
        timelineMobile.reversed() ? timelineMobile.play() : timelineMobile.reverse();
    });
    
    // var options = {
    //     animate: true,
    //     patternWidth: 100,
    //     patternHeight: 100,
    //     grainOpacity: 0.05,
    //     grainDensity: 1,
    //     grainWidth: 1,
    //     grainHeight: 1
    // };
    
    // grained('#grain', options);

    // var Scrollbar = window.Scrollbar;
    // Scrollbar.init(document.querySelector('#my-scrollbar'));

    
    //Get the button:
mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.opacity = "0";
  }
};


// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
}

runScripts();

$(document).ready(function() {
    if($('body').hasClass('home')){
      rosterFade();
    }
  });

const rosterFade = () => {

    var controller = new ScrollMagic.Controller();

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
}

const footerArrow = document.body.classList.contains("home");

document.getElementById('toTop').className+= " rest";


// This function will run a throttled script every 300 ms
var checkFooter = _.throttle(() => {
    // Run JavaScript stuff here
    console.log('checkFooter');

    // Detect scroll position
    let scrollPosition = Math.round(window.scrollY);

    // If we've scrolled 100px, add "visible" class to the header
    if (scrollPosition > 500) {
        document.querySelector('.footer').classList.add('hide');
    }
    // If not, remove "sticky" class from header
    else {
        document.querySelector('.footer').classList.remove('hide');
    }
}, 300);

// Run the checkHeader function every time you scroll
window.addEventListener('scroll', checkFooter);

var moveTicker = _.throttle(() => {
    console.log
})


// barba.init({
//     transitions: [{
//         name: "switch",
//         leave({current, next, trigger}) {
//             return new Promise(resolve => {
//                 const timeline = gsap.timeline({
//                     onComplete() {
//                         resolve();
//                     }
//                 });

//                 timeline
//                     .to('header', {duration: 0.5, opacity: 0, y: "-100%"})
//             })

//         },
//         enter({current, next, trigger}) {
            

//             return new Promise(resolve => {
//                 const timeline = gsap.timeline ({
//                     onComplete() {
//                         runScripts();
//                         resolve();
//                     }
//                 });
                
//                 timeline
//                     .to('header', {duration: 0.5, opacity: 0, y: "0%"})
//             })
//         },
//         once({
//             current, next,trigger}) {
          
//             return new Promise(resolve => {
//                 const timeline = gsap.timeline({
//                     onComplete() {
//                         runScripts();
//                         $("body").removeClass('noscroll');
//                         resolve();
//                     }
//                 });
//                 gsap.set(".overview-text-top", {opacity: 0, y: "10%"}, 0);
//                 gsap.set(".overview-text-bottom", {opacity: 0, y: "-10%"}, 0);
//                 gsap.set(".reveal-text", {opacity: 0}, 0);
//                 gsap.set(".reveal-text-two", {opacity: 0}, 0);
//                 gsap.set(".reveal", {opacity: 1, y: "0%"}, 0);
//                 // gsap.set(".hidetext", {opacity: 0, y: "110%"});
//                 gsap.set(".home", { y: "20%"}, 0);
//                 gsap.set("#desktop", {y: "-100px"});

//                 timeline
//                     .to(".reveal-text", {duration: 2, opacity: "1", ease: Power4.easeInOut,}, 0)
//                     .to(".reveal-text-two", {duration: 2, opacity: "1", ease: Power4.easeInOut, delay: 1.5}, 0)
//                     .to(".reveal", {duration: 1.5, y: "-100%", ease: Power4.easeInOut, delay: 3.5}, 0)
//                     .to(".home", {duration: 1.5, y: "0%", ease: Power4.easeInOut, delay: 3.4}, 0)
//                     // .to(".hidetext", 1.5, {opacity: 1, y: "0%", ease: Power4.easeOut}, 0.15)
//                     .to("#desktop", {duration: 0.8, y: "0px", ease: Power4.easeOut, delay: 4.8}, 0)
//                     .to(".overview-text-top", {duration: 1, opacity: 1, y: "0%", ease: Power4.easeOut, delay: 4.8}, 0.15)
//                     .to(".overview-text-bottom", {duration: 1, opacity: 1, y: "0%", ease: Power4.easeOut, delay: 4.8}, 0.15)
//             });
//         }        
//     }],
//     views: [],
//     debug: true
// });
