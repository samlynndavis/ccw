
  const timeline = gsap.timeline();

  gsap.set(".process.main path", {fill:"#fff"})  

var processTween = timeline
                      .to(".process.main path", { duration: 2, fill:"#e44b4b", ease: Power4.easeInOut, delay:1})
                      .to(".process:nth-child(1)", {duration: 2, opacity: 1, translateY:"25px", ease: Power4.easeInOut, delay:2}, 0)
                      .to(".process:nth-child(2)", {duration: 2, opacity: 1, translateY:"50px", ease: Power4.easeInOut, delay:2}, 0)
                      .to(".process:nth-child(3)", {duration: 2, opacity: 1, translateY:"75px", ease: Power4.easeInOut, delay:2}, 0)
                      .to(".process:nth-child(4)", {duration: 2, opacity: 1, translateY:"100px", ease: Power4.easeInOut, delay:2}, 0)
                      .to(".process:nth-child(5)", {duration: 2, opacity: 1, translateY:"125px", ease: Power4.easeInOut, delay:2}, 0)
                      .to(".process:nth-child(6)", {duration: 2, opacity: 1, translateY:"150px", ease: Power4.easeInOut, delay:2}, 0)
                      .to(".process:nth-child(7)", {duration: 2, opacity: 1, translateY:"175px", ease: Power4.easeInOut, delay:2}, 0)
                      .to(".process:nth-child(8)", {duration: 2, opacity: 1, translateY:"200px", ease: Power4.easeInOut, delay:2}, 0)
                      .to(".process:nth-child(9)", {duration: 2, opacity: 1, translateY:"225px", ease: Power4.easeInOut, delay:2}, 0)
                      .to(".process:nth-child(10)", {duration: 2, opacity: 1, translateY:"250px", ease: Power4.easeInOut, delay:2}, 0)
                      .to(".process:nth-child(11)", {duration: 2, opacity: 1, translateY:"275px", ease: Power4.easeInOut, delay:2}, 0)
                      .to(".process:nth-child(12)", {duration: 2, opacity: 1, translateY:"300px", ease: Power4.easeInOut, delay:2}, 0)

var controller = new ScrollMagic.Controller();

var processScene = new ScrollMagic.Scene({ triggerElement: ".process.main", offset:-300, duration: 1000 })
  .setTween(processTween)
  // .setPin("#target", {pushFollowers: false})
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);