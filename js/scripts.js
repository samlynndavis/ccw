var introCookie = Cookies.get('loveintro')

var createCookie = () => {
    Cookies.set('loveintro', 'true');

    var introCookie = Cookies.get('loveintro');
};

var introScript = () => {

    $("body").addClass('noscroll');

    const intro = gsap.timeline({
        onComplete() {
            $("body").removeClass('noscroll');
            Cookies.set('loveintro', 'true');
        }
    });


    gsap.set(".overview-text-top", {
        opacity: 0
    }, 0)
    gsap.set(".overview-text-bottom", {
        opacity: 0
    }, 0)
    gsap.set(".reveal", {
        opacity: 1,
        yPercent: 0
    }, 0);
    gsap.set(".reveal-cover", {
        opacity: 1,
        yPercent: 0
    }, 0);
    gsap.set("#desktop", {
        y: "-100%"
    });
    gsap.set(".footer-text", {
        opacity: 0
    });
    gsap.set(".playlist", {
        x: "200%"
    });
    gsap.set(".footer-line", {
        scaleX: 0,
        transformOrigin: "left"
    });
    gsap.set(".chicago", {
        css: {
            color: "#efe8d8"
        }
    });
    gsap.set(".tagline", {
        css: {
            opacity: 0
        }
    });



    intro
        .to(".chicago", {
            duration: 2,
            css: {
                color: "#dd5a54"
            },
            ease: Power4.easeOut,
            delay: 4.5
        }, 0)
        .to(".reveal", {
            duration: 1.5,
            y: "-100%",
            ease: Power4.easeInOut,
            delay: 5.5
        }, 0)
        .to(".reveal-cover", {
            duration: 1.5,
            y: "-100%",
            ease: Power4.easeInOut,
            delay: 5.5
        }, 0)
        .to("#desktop", {
            duration: 1,
            y: "0%",
            ease: Power4.easeOut,
            delay: 7
        }, 0)
        .to(".overview-text-top", {
            duration: 3,
            opacity: 1,
            ease: Power4.easeOut,
            delay: 1,
            clearProps: 'all'
        }, 0)
        .to(".overview-text-bottom", {
            duration: 3,
            opacity: 1,
            ease: Power4.easeOut,
            delay: 2.5,
            clearProps: 'all'
        }, 0)
        .to(".footer-line", {
            duration: 1.5,
            scaleX: 1,
            ease: Power4.easeInOut,
            delay: 6.5
        }, 0)
        .to(".footer-text", {
            duration: 0.5,
            opacity: 1,
            ease: Power4.easeOut,
            delay: 7,
            clearProps: 'all'
        }, 0)
        .to(".playlist", {
            duration: 2,
            x: "0%",
            clearProps: "all",
            ease: Power4.easeInOut,
            delay: 6.5
        }, 0)
        .to(".tagline", {
            duration: 2,
            opacity: 1,
            ease: Power4.easeInOut,
            delay: 8
        }, 0)
};

var introSkip = () => {

    const intro = gsap.timeline();

    gsap.set(".reveal", {
        css:{display: "none"}
    }, 0);
    gsap.set(".reveal-cover", {
        css:{display: "none"}
    }, 0);

};

var cookieWatch = () => {

    if ((introCookie == 'undefined' || introCookie == null || introCookie == "" || introCookie == "null") && ($( window ).width() > 1024)) {
        createCookie();
        introScript();
    } else {
        introSkip();
        createCookie();
    }

};

var widthCheck = () => {
    if ($( window ).width() <1024) {
        introSkip();
        cookieWatch();
        
    } else {
        return;
    }
};

$(window).on('load', function () {
    cookieWatch();
});


const runScripts = () => {

    const aboutReveal = () => {

        const openAbout = $('#about');
        const closeAbout = $('#close');


        gsap.set(".about", {
            opacity: 0
        })
        gsap.set("#close", {
            opacity: 0
        })
        // gsap.set(".blurb", {y: "20%", opacity: 0})

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
            .to(".about", 0.5, {
                opacity: 1,
                ease: Power4.easeInOut
            })
            .to(".blurb", 1, {
                opacity: 1,
                ease: Power4.easeInOut,
                delay: 0.5
            }, 0)
            .to("#close", 0.5, {
                opacity: 1,
                ease: Power4.easeInOut,
                delay: 0.8
            }, 0);

        $(document).on('click', "#about", function () {
            $(".about").addClass('active');
            timeline.reversed() ? timeline.play() : timeline.reverse();
        });

        $(document).on('click', "#close", function () {
            timeline.reversed() ? timeline.play() : timeline.reverse();
            $("body").removeClass('noscroll');
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

    const dragImage2 = () => {
        // Drag intro image around screen

        dragElement(document.getElementById("drag-image-2"));

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

        const grabber = document.querySelector('#drag-image-2');

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
        var fadeTween = TweenMax.from($(this), 0.7, {
            opacity: "0",
            ease: Power4.easeInOut
        });

        // build a scene
        var scene = new ScrollMagic.Scene({
                triggerElement: this,
                offset: -100,
                reverse: false
            })
            .setTween(fadeTween) // trigger a TweenMax.to tween
            .addTo(controller);

    });

    // loop through all elements
    $('.line-reveal').each(function () {

        // build a tween
        var lineTween = TweenMax.to($(this), 1.8, {
            css: {
                scaleX: 1,
                transformOrigin: "left"
            },
            ease: Power4.easeInOut
        }, 0);

        // build a scene
        var scene = new ScrollMagic.Scene({
                triggerElement: this,
                offset: -200,
                reverse: false
            })
            .setTween(lineTween) // trigger a TweenMax.to tween
            .addTo(controller);

    });

    // loop through all elements
    $('.left-reveal').each(function () {

        // build a tween
        var lineTween = TweenMax.from($(this), 1.8, {
            duration: 2,
            x: "20%",
            opacity: 0,
            ease: Power4.easeOut
        }, 0);

        // build a scene
        var scene = new ScrollMagic.Scene({
                triggerElement: this,
                offset: -200,
                reverse: false
            })
            .setTween(lineTween) // trigger a TweenMax.to tween
            .addTo(controller);

    });

    // loop through all elements
    $('.text-reveal').each(function () {

        // build a tween
        var lineTween = TweenMax.from($(this), {
            duration: 2,
            y: "20%",
            opacity: 0,
            ease: Power4.easeOut
        }, 0);

        // build a scene
        var scene = new ScrollMagic.Scene({
                triggerElement: this,
                offset: -400,
                reverse: false
            })
            .setTween(lineTween) // trigger a TweenMax.to tween
            .addTo(controller);

    });

    // loop through all elements
    $('.influence-bg').each(function () {

        // build a tween
        var lizInfTween = TweenMax.to($(this), {
            duration: 0.4,
            translateY: "-10px",
            translateX: "10px",
            opacity: 1,
            ease: Linear.easeNone
        }, 0);

        // build a scene
        var scene = new ScrollMagic.Scene({
                triggerElement: this
            })
            .setTween(lizInfTween) // trigger a TweenMax.to tween
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    });



    var slideStart = new TimelineMax();
    var slideEnd = new TimelineMax();

    gsap.set(".start-right p", {
        x: "30%",
        opacity: 0
    })
    gsap.set(".start-left p", {
        x: "-30%",
        opacity: 0
    })

    var slideStartTween = slideStart
        // .to(".liz-home", {backgroundColor: "#000", ease: Linear.noEase})
        .to(".start-left p", {
            duration: 0.8,
            x: "0%",
            opacity: 1,
            ease: Power4.easeOut
        }, 0)
        .to(".start-right p", {
            duration: 0.8,
            x: "0%",
            opacity: 1,
            ease: Power4.easeOut
        }, 0)

    var slideEndTween = slideEnd
    // .to(".liz-home", {backgroundColor: "#fff", ease: Linear.noEase}, 0)

    var slideStartScene = new ScrollMagic.Scene({
            triggerElement: ".liz-start",
            triggerHook: "0.5"
        })
        .setTween(slideStartTween)
        // .setPin(".liz-start", {pushFollowers: true})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    var slideEndScene = new ScrollMagic.Scene({
            triggerElement: ".liz-start",
            offset: 650
        })
        .setTween(slideEndTween)
        // .setPin("#target", {pushFollowers: false})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);


    var lizSlide = new TimelineMax();

    var lizSlideTween = lizSlide.from(".slide-right", {
            x: "110%",
            ease: Power4.easeInOut
        }, 0)
        .from(".slide-left", {
            x: "-110%",
            ease: Power4.easeInOut
        }, 0)

    var lizSlideScene = new ScrollMagic.Scene({
            triggerElement: ".large-copy-split-desktop",
            reverse: false,
            duration: "100%"
        })
        .setTween(lizSlide)
        // .setPin("#target", {pushFollowers: false})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    const splitImageCopy = () => {
        // build tween
        var timelineSplitter = new TimelineMax();

        // var tween1 = timelineSplitter
        var splitterTween = timelineSplitter.from(".splitter", 1, {
                opacity: 0,
                x: "-50%",
                ease: Power4.easeInOut
            })
            .from(".splitter-question", 1, {
                opacity: 0,
                ease: Power4.easeInOut
            }, 0)
            .from(".splitter-answer", 1, {
                opacity: 0,
                ease: Power4.easeInOut
            }, 0)

        timelineSplitter.add(splitterTween)

        // build scene
        var splitterScene = new ScrollMagic.Scene({
                triggerElement: ".split-image-desktop",
                duration: 500,
                reverse: false
            })
            .setTween(timelineSplitter)
            // .setPin("#target", {pushFollowers: false})
            // .addIndicators({name: 'test', indent: 500}) // add indicators (requires plugin)
            .addTo(controller);

    }

    const lizTweens = () => {

        var controller = new ScrollMagic.Controller();

        var bgLeftScrollT1 = new TimelineMax();
        var bgLeftScrollT2 = new TimelineMax();
        var bgLeftScrollT3 = new TimelineMax();
        var bgRightScrollT1 = new TimelineMax();

        bgLeftScrollT1.to(".right-side-liz", {
            backgroundColor: "#bea1a5",
            ease: Linear.easeNone
        })

        bgLeftScrollT2.to(".right-side-liz", {
            backgroundColor: "#c0c2ce",
            ease: Linear.easeNone
        })

        bgLeftScrollT3.to(".right-side-liz", {
            backgroundColor: "#fff",
            ease: Linear.easeNone
        })

        bgRightScrollT1.to(".left-side-liz", {
            backgroundColor: "#c0c2ce",
            ease: Linear.easeNone
        })



        var bgLeftScene0 = new ScrollMagic.Scene({
                triggerElement: ".right-side-liz",
                duration: 300
            })
            .setTween(bgLeftScrollT1)
            // .setPin("#target", {pushFollowers: false})
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        var bgLeftScene1 = new ScrollMagic.Scene({
                triggerElement: ".right-side-liz",
                offset: 1000,
                duration: 600
            })
            .setTween(bgLeftScrollT2)
            // .setPin("#target", {pushFollowers: false})
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        var bgLeftScene2 = new ScrollMagic.Scene({
                triggerElement: ".right-side-liz",
                offset: 1500,
                duration: 600
            })
            .setTween(bgLeftScrollT3)
            // .setPin("#target", {pushFollowers: false})
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        var bgRightScene = new ScrollMagic.Scene({
                triggerElement: ".right-side-liz",
                duration: 2000
            })
            .setTween(bgRightScrollT1)
            // .setPin("#target", {pushFollowers: false})
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);



        var picT0 = new TimelineMax();
        var picT1 = new TimelineMax();
        var picT2 = new TimelineMax();
        var picT3 = new TimelineMax();

        picT0.to(".pic-0", {
            css: {
                className: '+=hide'
            }
        })

        picT1.to(".pic-1", {
            css: {
                className: '+=show'
            }
        })

        picT2.to(".pic-2", {
            css: {
                className: '+=show'
            }
        })

        picT3.to(".pic-3", {
            css: {
                className: '+=show'
            }
        })



        var picScene0 = new ScrollMagic.Scene({
                triggerElement: ".right-side-liz",
                offset: 900
            })
            .setTween(picT0)
            // .setPin("#target", {pushFollowers: false})
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        var picScene1 = new ScrollMagic.Scene({
                triggerElement: ".right-side-liz",
                offset: 900
            })
            .setTween(picT1)
            // .setPin("#target", {pushFollowers: false})
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        var picScene2 = new ScrollMagic.Scene({
                triggerElement: ".right-side-liz",
                offset: 1200
            })
            .setTween(picT2)
            // .setPin("#target", {pushFollowers: false})
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        var picScene3 = new ScrollMagic.Scene({
                triggerElement: ".right-side-liz",
                offset: 1500
            })
            .setTween(picT3)
            // .setPin("#target", {pushFollowers: false})
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


        var bgLiz = new TimelineMax();

        var bgLizTween = bgLiz.to(".liz-home", {
                backgroundColor: "#fff0f2",
                ease: Linear.easeNone
            })
            .to(".large-copy-liz p", {
                css: {
                    color: "#000"
                },
                ease: Linear.easeNone
            })
            .to(".top-copy-liz", {
                css: {
                    color: "#c0c2ce"
                },
                ease: Linear.easeNone
            })
            .to(".social-liz", {
                css: {
                    color: "#c0c2ce"
                },
                ease: Linear.easeNone
            })
            .to(".marquee span", {
                css: {
                    color: "#c0c2ce"
                },
                ease: Linear.easeNone
            })
            .to(".footer-desktop", {
                css: {
                    color: "#c0c2ce"
                },
                ease: Linear.easeNone
            })
            .to(".smdvs path", {
                css: {
                    fill: "#c0c2ce"
                },
                ease: Linear.easeNone
            })
            .to(".footer-line", {
                css: {
                    borderColor: "#c0c2ce"
                },
                ease: Linear.easeNone
            })

        var bgLizScene = new ScrollMagic.Scene({
                triggerElement: ".color-split",
                duration: 1000
            })
            .setTween(bgLiz)
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
                triggerElement: '#roster',
                reverse: false
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



        var openMenu = $('.nav-icon');
        var menu = $('#mobile-nav-wrapper');

        $(openMenu).on('click', function () {
            $(menu).toggleClass('on');
            $(openMenu).toggleClass('on');
            $("body").toggleClass('noscroll');
        });

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
    window.onscroll = function () {
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

    // $(document).ready(function () {
    //     $('#nav-icon').click(function () {
    //         $('#mobile-nav').toggleClass('open');
    //     });
    // });



    $(document).ready(function () {

        if ($('body').hasClass('homepage')) {
            rosterFade();
            cookieWatch();
        }
        if ($('body').hasClass('liz-home')) {
            lizTweens();
        }
        if (!$('body').hasClass('homepage')) {
            splitImageCopy();
        }
        if ($("#drag-image").length > 0) {
            dragImage();
        } else if ($("#drag-image-2").length > 0) {
            dragImage2();
        } else {
            console.log('NOT HERE');
        }
    });

}

runScripts();



// // Roster Slider

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