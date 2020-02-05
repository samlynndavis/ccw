var controller = new ScrollMagic.Controller();

const commSlide = gsap.timeline();

  gsap.set(".comm-right", {x:"-200%"})
  gsap.set(".comm-right p", {x:"0%", opacity: 0})
  gsap.set(".comm-left", {x:"-100%"})
  gsap.set(".question-spin-laura", {opacity: 0})

  var commTween = commSlide
                        .to(".comm-right", {duration: 2, x:"0%", ease: Power4.easeOut, delay: 0.3}, 0)
                        .to(".comm-right p", {duration: 2, x:"0%", opacity: 1, ease: Power4.easeOut}, 0)
                        .to(".comm-left", {duration: 2, x:"0%", ease: Power4.easeOut}, 0)
                        .to(".question-spin-laura", {duration: 2, opacity: 1, ease: Power4.easeOut})

                        var commScene = new ScrollMagic.Scene({ triggerElement: ".comm-left", reverse: false})
                        .setTween(commTween)
                        // .setPin("#target", {pushFollowers: false})
                        // .addIndicators() // add indicators (requires plugin)
                        .addTo(controller);

const processStart = gsap.timeline();


var processStartTween = processStart
.to(".laura-home", {css:{backgroundColor:"#ffb700"}, ease: Power4.easeOut}, 0)
.to(".laura-start p", {css:{color:"#ffefe5"}, ease: Power4.easeOut}, 1)

var processStartScene = new ScrollMagic.Scene({ triggerElement: ".laura-start", duration: '500%'})
.setTween(processStartTween)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);


const processLaura = gsap.timeline();

  gsap.set(".strategize", {x:"20%", opacity: 0})
  gsap.set(".do", {x:"20%", opacity: 0})

  var lauraTween = processLaura
                        .to(".laura-home", {css:{backgroundColor:"#000"}, ease: Power4.easeOut}, 0)
                        .to(".dream", {duration: 2, x:"-20%", opacity: 0, ease: Power4.easeOut})
                        .to(".strategize", {duration: 2, x:"0%", opacity: 1, ease: Power4.easeOut}, 1)
                        .to(".laura-home", {css:{backgroundColor:"#ffb700"}, ease: Power4.easeOut,}, 1)
                        .to(".strategize", {duration: 2, x:"-20%", opacity: 0, ease: Power4.easeOut}, 2)
                        .to(".do", {duration: 2, x:"0%", opacity: 1, ease: Power4.easeOut}, 2)
                        .to(".laura-home", {css:{backgroundColor:"#ffefe5"}, ease: Power4.easeOut,}, 2)

                        var processLauraScene = new ScrollMagic.Scene({ triggerElement: ".laura-process", triggerHook: 0, duration: "300%"})
                        .setTween(lauraTween)
                        .setPin(".laura-process", {pushFollowers: true})
                        // .addIndicators() // add indicators (requires plugin)
                        .addTo(controller);

