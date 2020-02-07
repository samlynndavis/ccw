
  const timeline = gsap.timeline();

  gsap.set(".process.main path", {fill:"#C23B22", stroke:"#C23B22"})

var processTween = timeline
                      .to(".process.main path", { duration: 2, fill:"#FFD1A9", ease: Power4.easeInOut})
                      .to(".process-pieces", { duration: 2, y:"-100px", ease: Power4.easeInOut}, 0)
                      .to(".process:nth-child(1)", {duration: 2, opacity: 1, translateY:"25px", ease: Power4.easeInOut}, 1)
                      .to(".process:nth-child(2)", {duration: 2, opacity: 1, translateY:"50px", ease: Power4.easeInOut}, 1)
                      .to(".process:nth-child(3)", {duration: 2, opacity: 1, translateY:"75px", ease: Power4.easeInOut}, 1)
                      .to(".process:nth-child(4)", {duration: 2, opacity: 1, translateY:"100px", ease: Power4.easeInOut}, 1)
                      .to(".process:nth-child(5)", {duration: 2, opacity: 1, translateY:"125px", ease: Power4.easeInOut}, 1)
                      .to(".process:nth-child(6)", {duration: 2, opacity: 1, translateY:"150px", ease: Power4.easeInOut}, 1)
                      .to(".process:nth-child(7)", {duration: 2, opacity: 1, translateY:"175px", ease: Power4.easeInOut}, 1)
                      .to(".process:nth-child(8)", {duration: 2, opacity: 1, translateY:"200px", ease: Power4.easeInOut}, 1)
                      .to(".process:nth-child(9)", {duration: 2, opacity: 1, translateY:"225px", ease: Power4.easeInOut}, 1)
                      .to(".process:nth-child(10)", {duration: 2, opacity: 1, translateY:"250px", ease: Power4.easeInOut}, 1)
                      .to(".process:nth-child(11)", {duration: 2, opacity: 1, translateY:"275px", ease: Power4.easeInOut}, 1)
                      .to(".process:nth-child(12)", {duration: 2, opacity: 1, translateY:"300px", ease: Power4.easeInOut}, 1)

var controller = new ScrollMagic.Controller();

var processScene = new ScrollMagic.Scene({ triggerElement: ".process-wrapper", triggerHook: "0", duration: "100%" })
  .setTween(processTween)
  .setPin(".process-wrapper", {pushFollowers: true})
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

  const commSlide = gsap.timeline();

  gsap.set(".comm-left", {x:"-100%"})
  gsap.set(".item__img", {x:"-200%", opactiy: 0})
  gsap.set(".comm-left p", {y:"30%", opacity: 0})
  gsap.set(".question-spin-mia", {y:"10%", opacity: 0})

  var commTween = commSlide
                        .to(".comm-left", {duration: 2, x:"0%", ease: Power4.easeOut, }, 0)
                        .to(".item__img", {duration: 2.5, x:"0%", ease: Power4.easeOut, }, 0)
                        .to(".comm-left p", {duration: 4, opacity: 1, y:"0%", ease: Power4.easeOut, }, 0)
                        .to(".question-spin-mia", {duration: 2, opacity: 1, y:"0%", ease: Power4.easeOut, }, 0)

                        var commScene = new ScrollMagic.Scene({ triggerElement: ".comm-left", reverse: false})
                        .setTween(commTween)
                        // .setPin("#target", {pushFollowers: false})
                        // .addIndicators() // add indicators (requires plugin)
                        .addTo(controller);

  const commSlide2 = gsap.timeline();

  // gsap.set(".title-reveal", {y:"100%"})
  // gsap.set(".footer-line", {css:{scaleX:0}})
  gsap.set(".mia-question", {x:"10%", opacity: 0})
  // gsap.set(".commslide-left p", {y:"300%", opacity: 0})

  var commTween2 = commSlide2
                        // .to(".title-reveal", {duration: 1.5, y:"0%", ease: Power4.easeOut, delay:1.6}, 0)
                        // .to(".footer-line", {duration: 3, css:{scaleX:1, transformOrigin: "left"}, ease: Power4.easeOut}, 0)
                        .to(".mia-question", {duration: 3, x:"0%", opacity: 1, ease: Power4.easeOut, delay: 0.2}, 0)
                        // .to(".commslide-left p", {duration: 3, opacity: 1, y:"0%", ease: Power4.easeOut, delay: 0.5}, 0)

                        var commScene = new ScrollMagic.Scene({ triggerElement: ".mia-question-wrapper-desktop", offset: 400, reverse: false})
                        .setTween(commTween2)
                        // .setPin("#target", {pushFollowers: false})
                        // .addIndicators() // add indicators (requires plugin)
                        .addTo(controller);

                        
                        
                        
const bgMia = gsap.timeline();

var bgMiaTween = bgMia
                    // .to(".mia-home", {duration: 2, css:{backgroundColor: "#FFD1A9"}})
                    .to(".top-copy p", {css:{color: "#C23B22" }})

var miaScene = new ScrollMagic.Scene({ triggerElement: ".process-pieces", offset: -50, duration: 200, reverse: false})
.setTween(bgMiaTween)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

const bgMia2 = gsap.timeline();

var bgMiaTween2 = bgMia2
                    .to(".mia-home", {duration: 2, css:{backgroundColor: "#C23B22"}})
                    .to(".top-copy p", {css:{color: "#C23B22"}})

var miaScene2 = new ScrollMagic.Scene({ triggerElement: ".color-split", offset: 200, duration: 200, reverse: true})
.setTween(bgMiaTween2)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);