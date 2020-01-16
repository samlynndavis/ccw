const runScripts = () => {
       
    const aboutReveal = () => {

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
    }

    aboutReveal();

    
    // Hide Header on on scroll down
    let didScroll;
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = $('header').outerHeight();
    
    $(window).scroll(function (event) {
        didScroll = true;
        console.log(didScroll);
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
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
    
        lastScrollTop = st;
    }
    
    const dragImage = () => {
    // Drag intro image around screen
    
    dragElement(document.getElementById("drag-image"));
    
    function dragElement(elmnt) {
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
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
    
    //toggle 'grab" and 'grabbing' cursors on mousedown and leave
    
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

}    
    
    // init controller
    var controller = new ScrollMagic.Controller();
    
    // loop through all elements
    $('.fade').each(function () {
    
        // build a tween
        var fadeTween = TweenMax.from($(this), 0.7, {opacity: "0", ease: Power4.easeInOut});
    
        // build a scene
        var scene = new ScrollMagic.Scene({
                triggerElement: this
            })
            .setTween(fadeTween) // trigger a TweenMax.to tween
            .addTo(controller);
    
    });

    var bgAnna = new TimelineMax();
                        
    var bgAnnaTween1 = bgAnna.to(".anna-home", { backgroundColor: "#a3512f", ease: Linear.easeNone})                     
    var bgAnnaTween2 = bgAnna.to(".anna-home",  { backgroundColor: "#ecd48c", ease: Linear.easeNone})               

    var bgAnnaScene0 = new ScrollMagic.Scene({triggerElement: ".large-copy-anna-solo"})
    .setTween(bgAnnaTween1)
    // .setPin("#target", {pushFollowers: false})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    var bgLeftScene1 = new ScrollMagic.Scene({triggerElement: ".large-copy-anna-solo"})    
    .setTween(bgAnnaTween2)
    // .setPin("#target", {pushFollowers: false})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    var bgHomeReverse = new TimelineMax();

    var bgHomeReverseTween = bgHomeReverse
        .to(".homepage", 1, { backgroundColor: "#fff", ease: Power4.easeInOut })

    var bgHomeReverseScene = new ScrollMagic.Scene({ triggerElement: "#roster", offset: -50})
        .setTween(bgHomeReverseTween)
        // .setPin("#target", {pushFollowers: false})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    // var controller = new ScrollMagic.Controller();

    // var annaCopyT1 = new TimelineMax();

    // annaCopyT1.from(".large-copy-anna-solo", {opacity: 0, ease: Linear.easeNone})

  

    // var annaCopyScene = new ScrollMagic.Scene({triggerElement: ".large-copy-anna-solo", duration: 300})    
    // .setTween(annaCopyT1)
    // // .setPin("#target", {pushFollowers: false})
    // .addIndicators() // add indicators (requires plugin)
    // .addTo(controller);

    const lizTweens = () => {

    var controller = new ScrollMagic.Controller();

    var bgLeftScrollT1 = new TimelineMax();
    var bgLeftScrollT2 = new TimelineMax();
    var bgLeftScrollT3 = new TimelineMax();
    var bgRightScrollT1 = new TimelineMax();

    bgLeftScrollT1.to(".right-side-liz", {backgroundColor: "#bea1a5", ease: Linear.easeNone})

    bgLeftScrollT2.to(".right-side-liz", {backgroundColor: "#c0c2ce", ease: Linear.easeNone})
    
    bgLeftScrollT3.to(".right-side-liz", {backgroundColor: "#fff", ease: Linear.easeNone})

    bgRightScrollT1.to(".left-side-liz", {backgroundColor: "#c0c2ce", ease: Linear.easeNone})

  

    var bgLeftScene0 = new ScrollMagic.Scene({triggerElement: ".right-side-liz", duration: 300})    
    .setTween(bgLeftScrollT1)
    // .setPin("#target", {pushFollowers: false})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    var bgLeftScene1 = new ScrollMagic.Scene({triggerElement: ".right-side-liz", offset: 1000, duration: 600})    
    .setTween(bgLeftScrollT2)
    // .setPin("#target", {pushFollowers: false})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    var bgLeftScene2 = new ScrollMagic.Scene({triggerElement: ".right-side-liz", offset: 1500, duration: 600})    
    .setTween(bgLeftScrollT3)
    // .setPin("#target", {pushFollowers: false})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    var bgRightScene = new ScrollMagic.Scene({triggerElement: ".right-side-liz", duration: 2000})    
    .setTween(bgRightScrollT1)
    // .setPin("#target", {pushFollowers: false})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);



    var picT0 = new TimelineMax();
    var picT1 = new TimelineMax();
    var picT2 = new TimelineMax();
    var picT3 = new TimelineMax();

    picT0.to(".pic-0", {css:{className:'+=hide'}})

    picT1.to(".pic-1", {css:{className:'+=show'}})
    
    picT2.to(".pic-2", {css:{className:'+=show'}})

    picT3.to(".pic-3", {css:{className:'+=show'}})

  

    var picScene0 = new ScrollMagic.Scene({triggerElement: ".right-side-liz", offset: 900})    
    .setTween(picT0)
    // .setPin("#target", {pushFollowers: false})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    var picScene1 = new ScrollMagic.Scene({triggerElement: ".right-side-liz", offset: 900})    
    .setTween(picT1)
    // .setPin("#target", {pushFollowers: false})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    var picScene2 = new ScrollMagic.Scene({triggerElement: ".right-side-liz", offset: 1200})    
    .setTween(picT2)
    // .setPin("#target", {pushFollowers: false})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    var picScene3 = new ScrollMagic.Scene({triggerElement: ".right-side-liz", offset: 1500})    
    .setTween(picT3)
    // .setPin("#target", {pushFollowers: false})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


    var bgLiz = new TimelineMax();

    var bgLizTween = bgLiz.to(".liz-home", {backgroundColor: "#fff0f2", ease: Linear.easeNone})
                          .to(".large-copy-liz p", {css:{color: "#000"}, ease: Linear.easeNone})
                          .to(".top-copy-liz", {css:{color: "#c0c2ce"}, ease: Linear.easeNone})
                          .to(".social-liz", {css:{color: "#c0c2ce"}, ease: Linear.easeNone })
                          .to(".marquee span", {css:{color: "#c0c2ce"}, ease: Linear.easeNone})
                          .to(".footer-desktop", {css:{color: "#c0c2ce"}, ease: Linear.easeNone})
                          .to(".caption-photo", {css:{color: "#bea1a5"}, ease: Linear.easeNone})

    var bgLizScene = new ScrollMagic.Scene({triggerElement: ".color-split", duration: 1000})    
    .setTween(bgLiz)
    // .setPin("#target", {pushFollowers: false})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    var lizSlide = new TimelineMax();

    var lizSlideTween = lizSlide.from(".liz-right", 1, {x:"110%", ease: Power4.easeInOut}, 0)
                                .from(".liz-left", 1,  {x:"-110%", ease: Power4.easeInOut}, 0)
                                .from(".large-copy-split-liz", 1, {opacity: 0, ease: Linear.easeNone, delay: .5}, 0)

    var lizSlideScene = new ScrollMagic.Scene({triggerElement: ".large-copy-split-liz-desktop", offset: -200, reverse:false})    
    .setTween(lizSlide)
    // .setPin("#target", {pushFollowers: false})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    }


const splitImageCopy = () => {
    // build tween
    var timelineSplitter = new TimelineMax();

        // var tween1 = timelineSplitter
        var splitterTween = timelineSplitter.from(".splitter", 1, {opacity: 0, x:-50, ease: Power4.easeInOut})
                                            .from(".splitter-question", 1, {opacity: 0, ease: Power4.easeInOut}, 0)
                                            .from(".splitter-answer", 1, {opacity: 0, ease: Power4.easeInOut}, 0)

        timelineSplitter.add(splitterTween)

    // build scene
    var splitterScene = new ScrollMagic.Scene({triggerElement: ".split-image-desktop", reverse:false})
                    .setTween(timelineSplitter)
                    // .setPin("#target", {pushFollowers: false})
                    // .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
            
}


    const homepageFade = () => {

    var bgHome = new TimelineMax
                        
    var bgHomeTween = bgHome
                        .to(".homepage", { backgroundColor: "#dd5a54", ease: Linear.easeNone })                        
                        .to(".salvage", { css:{textDecorationColor: "#000"}, ease: Linear.easeNone })                        

    var bgHomeScene = new ScrollMagic.Scene({triggerElement: ".bio", duration: "60%"})
    .setTween(bgHomeTween)
    // .setPin("#target", {pushFollowers: false})
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    var bgHomeReverse = new TimelineMax

    var bgHomeReverseTween = bgHomeReverse
        .to(".homepage", 1, { backgroundColor: "#fff", ease: Power4.easeInOut })

    var bgHomeReverseScene = new ScrollMagic.Scene({ triggerElement: "#roster", offset: -50})
        .setTween(bgHomeReverseTween)
        // .setPin("#target", {pushFollowers: false})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    }




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

    const mobileMenu = () => {
    
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

};
    
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

const pushFooter = () => {

    const footerBottom = document.body.classList.contains("homepage");
    
    const footerTicker = document.querySelector(".footer-desktop");
    
        if ($(document).scrollTop() > 5) {
            $(footerTicker).addClass('hide')
    } else {
        if ($(document).scrollTop() === 0) {
            $(footerTicker).addClass('normal').removeClass('hide').removeClass('bottom')
        }
    }
    
        if ($(document).scrollTop() > 500) {
            $(footerTicker).addClass('bottom').removeClass('hide')
    }
    };
        

    // var Scrollbar = window.Scrollbar;

    // Scrollbar.init(document.querySelector('#my-scrollbar'));

    
    // Get the button:
mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
    pushFooter();
};

function scrollFunction() {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
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

$(document).ready(function() {
    if($('body').hasClass('homepage')){
      rosterFade();
      homepageFade();
    }
    if($('body').hasClass('liz-home'))  {
        lizTweens();
    }
    if (!$('body').hasClass('homepage')){
        splitImageCopy();
    }
    if ($("#drag-image").length > 0) {
        dragImage();
    } else {
        console.log('NOT HERE');  
    }
  });

}

runScripts();

// const footerArrow = document.body.classList.contains("homepage");

// document.getElementById('toTop').className+= " rest";

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