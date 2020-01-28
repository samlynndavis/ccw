
  const timeline = gsap.timeline();

  gsap.set(".process.main path", {fill:"#C23B22", stroke:"#C23B22"})

var processTween = timeline
                      .to(".process.main path", { duration: 2, fill:"#FFD1A9", ease: Power4.easeInOut, delay:2})
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

var processScene = new ScrollMagic.Scene({ triggerElement: ".process.main", offset:-500, duration: 1000 })
  .setTween(processTween)
  // .setPin("#target", {pushFollowers: false})
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

  const commSlide = gsap.timeline();

  gsap.set(".comm-left", {x:"-100%"})
  gsap.set(".item__img", {x:"-200%", opactiy: 0})
  gsap.set(".comm-left p", {y:"30%", opacity: 0})
  gsap.set(".question-spin-mia", {y:"10%", opacity: 0})

  var commTween = commSlide
                        .to(".comm-left", {duration: 2, x:"0%", ease: Power4.easeOut, delay: 1}, 0)
                        .to(".item__img", {duration: 2.5, x:"0%", ease: Power4.easeOut, delay: 1.1}, 0)
                        .to(".comm-left p", {duration: 4, opacity: 1, y:"0%", ease: Power4.easeOut, delay: 1.1}, 0)
                        .to(".question-spin-mia", {duration: 2, opacity: 1, y:"0%", ease: Power4.easeOut, delay: 0.5}, 0)

                        var commScene = new ScrollMagic.Scene({ triggerElement: ".comm-left", offset: -200, reverse: false})
                        .setTween(commTween)
                        // .setPin("#target", {pushFollowers: false})
                        // .addIndicators() // add indicators (requires plugin)
                        .addTo(controller);

  const commSlide2 = gsap.timeline();

  gsap.set(".commslide-left", {x:"-100%"})
  gsap.set(".commslide-right", {x:"100%"})
  gsap.set(".comm-img", {y:"300%", opacity: 0})
  gsap.set(".commslide-left p", {y:"300%", opacity: 0})

  var commTween2 = commSlide2
                        .to(".commslide-left", {duration: 2, x:"0%", ease: Power4.easeOut}, 0)
                        .to(".commslide-right", {duration: 2, x:"0%", ease: Power4.easeOut}, 0)
                        .to(".comm-img", {duration: 3, y:"0%", opacity: 1, ease: Power4.easeOut, delay: 0.2}, 0)
                        .to(".commslide-left p", {duration: 3, opacity: 1, y:"0%", ease: Power4.easeOut, delay: 0.5}, 0)

                        var commScene = new ScrollMagic.Scene({ triggerElement: ".commslide-left", offset: -100, reverse: false})
                        .setTween(commTween2)
                        // .setPin("#target", {pushFollowers: false})
                        // .addIndicators() // add indicators (requires plugin)
                        .addTo(controller);

                        
                        
                        
const bgMia = gsap.timeline();

var bgMiaTween = bgMia
                    .to(".mia-home", {duration: 2, css:{backgroundColor: "#FFD1A9"}})
                    .to(".top-copy p", {css:{color: "#C23B22" }})

var miaScene = new ScrollMagic.Scene({ triggerElement: ".process-pieces", offset: -50, duration: 200, reverse: false})
.setTween(bgMiaTween)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

const bgMia2 = gsap.timeline();

var bgMiaTween2 = bgMia2
                    .to(".mia-home", {duration: 2, css:{backgroundColor: "#201f1d"}})
                    .to(".top-copy p", {css:{color: "#C23B22" }})

var miaScene2 = new ScrollMagic.Scene({ triggerElement: ".commslide-left", offset: 800, duration: 200, reverse: true})
.setTween(bgMiaTween2)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);



// var filters = document.querySelector(".filters"), // the SVG that contains the filters
// defs = filters.querySelector("defs"), // the  element inside the SVG
// blur = defs.querySelector("#blur"), // the blur filter
// blurFilter = blur.firstElementChild; // the feGaussianBlur primitive
                  
// // the element we want to apply the effect
// var $element=$(".blur");
// // storing the last position, to be able to measure changes
// var lastPos=$element.offset();
// // a multiplier, to be able to control the intensity of the effect
// var multiplier=0.5;

// // a helper to simplify setting the blur. 
// function setBlur(x,y){
// 	blurFilter.setAttribute("stdDeviation",x+","+y);	
// }

// (function updateMotionBlur(){
// 	// get the current position of the element
// 	var currentPos=$element.offset();

// 	// calculate the changes from the last frame and apply the multiplier
// 	var xDiff=Math.abs(currentPos.left-lastPos.left)*multiplier;
// 	var yDiff=Math.abs(currentPos.top-lastPos.top)*multiplier;

// 	// set the blur
// 	setBlur(xDiff,yDiff);

// 	// store current position for the next frame
// 	lastPos=currentPos;

// 	// call to update in the next frame
// 	requestAnimationFrame(updateMotionBlur);
// })();