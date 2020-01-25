var controller = new ScrollMagic.Controller();

const commSlide = gsap.timeline();

  gsap.set(".comm-right", {x:"100%"})
  gsap.set(".comm-right p", {y:"50%", opacity: 0})
  gsap.set(".comm-img", {opacity: 0})
  gsap.set(".comm-left", {x:"-100%"})
  gsap.set(".question-spin-laura", {opacity: 0})

  var commTween = commSlide
                        .to(".comm-right", {duration: 2, x:"0%", ease: Power4.easeOut}, 0)
                        .to(".comm-right p", {duration: 3, y:"0%", opacity: 1, ease: Power4.easeOut, delay: 1}, 0)
                        .to(".comm-img", {duration: 3, opacity: 1, ease: Power4.easeOut, delay: 1}, 0)
                        .to(".comm-left", {duration: 2, x:"0%", ease: Power4.easeOut}, 0)
                        .to(".question-spin-laura", {duration: 3, opacity: 1, ease: Power4.easeOut, delay: 2}, 0)

                        var commScene = new ScrollMagic.Scene({ triggerElement: ".comm-left", offset: -100, reverse: false})
                        .setTween(commTween)
                        // .setPin("#target", {pushFollowers: false})
                        .addIndicators() // add indicators (requires plugin)
                        .addTo(controller);