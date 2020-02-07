var controller = new ScrollMagic.Controller();

var bgAnna1 = new TimelineMax();
var bgAnnaReverse = new TimelineMax();

var bgAnnaTween1 = bgAnna1                   
                        .to(".marquee span", {css:{color: "#e3b79a"}, ease: Linear.easeNone})
                        .to(".footer-desktop", {css:{color: "#e3b79a"}, ease: Linear.easeNone})
                        .to(".footer-text", {css:{color: "#e3b79a"}, ease: Linear.easeNone})
                        .to(".footer-line", {css:{borderColor: "#e3b79a"}, ease: Linear.easeNone})                        
                        .to(".smdvs path", {css:{fill: "#e3b79a"}, ease: Linear.easeNone})

var bgAnnaScene1 = new ScrollMagic.Scene({triggerElement: ".large-copy-split-desktop", duration: 1000})    
.setTween(bgAnnaTween1)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var processAnna = new TimelineMax();
 
gsap.set("#drag-image-2", {scaleX: 0.7, x:"200%", opacity: 0})
gsap.set(".anna-ball", {css:{scaleX:0.2, scaleY:0.2, translateX: "1000px", opacity: 0}})
gsap.set(".large-copy-text", {y:"20%", opacity: 0})
gsap.set(".top-copy-process", {x:"20%", opacity: 0})
gsap.set(".anna-vid", {scaleX: 0.7, x:"300%", opacity: 0})
                    
var processAnnaTween = processAnna
                              .to("#drag-image-2", {scaleX: 1, duration: 2, x:"0%", opacity: 1, ease: Power4.easeOut}, 0)
                              .to(".anna-ball", {duration: 2, css:{scaleX:1, scaleY:1, translateX: "-100px", opacity: 1}, ease: Power4.easeOut, delay: 0.2}, 0)
                              .to(".large-copy-text", {duration: 3, y:"0%", opacity: 1, ease: Power4.easeOut}, 0)
                              .to(".top-copy-process", {duration: 3, x:"0%", opacity: 1, ease: Power4.easeOut}, 0)
                              .to(".anna-vid", {duration: 2, x:"0%", scaleX: 1, opacity: 1, ease: Power4.easeOut}, 0)
                         


var processAnnaScene = new ScrollMagic.Scene({triggerElement: ".anna-process", offset: 50, reverse: false})
.setTween(processAnnaTween)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var handsAnna = new TimelineMax();
 
// gsap.set(".hands p", {y:"-10%", opacity: 0})
gsap.set(".hands img", {x:"-20%", opacity: 0})
                    
var handsAnnaTween = handsAnna
                              .to(".anna-home", {duration: 1, backgroundColor: "#e3b79a", ease: Linear.easeNone}, 0)
                            //   .to(".hands p", {duration: 1, color:"#e9eecd", ease: Linear.easeNone}, 0)
                              .to(".hands img", {duration: 1, x:"0%", opacity: 1, ease: Power4.easeOut}, 0)
                         


var handsAnnaScene = new ScrollMagic.Scene({triggerElement: ".hands", offset: 100, duration: 400})
.setTween(handsAnnaTween)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var bgAnna = new TimelineMax();
                    
var bgAnnaTween = bgAnna
                              .to(".anna-home", {duration: 1, backgroundColor: "#e9eecd", ease: Linear.easeNone})
                         


var bgAnnaScene = new ScrollMagic.Scene({triggerElement: ".anna-single", offset: 800, duration: 400})
.setTween(bgAnnaTween)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);