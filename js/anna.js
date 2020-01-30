var controller = new ScrollMagic.Controller();

// var bgAnna0 = new TimelineMax();
var bgAnna1 = new TimelineMax();
// var textAnna = new TimelineMax();
var bgAnnaReverse = new TimelineMax();
// var textAnna2 = new TimelineMax();
// var scaleLine = new TimelineMax();
// var stickImg = new TimelineMax();
                    
// var bgAnnaTween0 = bgAnna0.to(".anna-home", { backgroundColor: "#652b22", ease: Linear.easeNone})   
// var textAnnaTween1 = textAnna.to(".top-copy", { color: "#fff", ease: Linear.easeNone})  
// var textAnnaTween2 = textAnna2.from(".large-copy-anna-solo", {opacity: 0, ease: Linear.easeNone})     

// var bgAnnaScene0 = new ScrollMagic.Scene({triggerElement: ".large-copy-anna-solo", duration: 200})
// .setTween(bgAnnaTween0)
// // .setPin("#target", {pushFollowers: false})
// // .addIndicators() // add indicators (requires plugin)
// .addTo(controller);

// var textAnnaScene1 = new ScrollMagic.Scene({triggerElement: ".large-copy-anna-solo", duration: 200})    
// .setTween(textAnnaTween1)
// // .setPin("#target", {pushFollowers: false})
// // .addIndicators() // add indicators (requires plugin)
// .addTo(controller);

// var textAnnaScene2 = new ScrollMagic.Scene({triggerElement: ".large-copy-anna-solo", duration: 200})    
// .setTween(textAnnaTween2)
// // .setPin("#target", {pushFollowers: false})
// // .addIndicators() // add indicators (requires plugin)
// .addTo(controller);

// var stickScene = new ScrollMagic.Scene({triggerElement: ".stick-image", offset: 350, duration: 3500})
// .setPin(".stick-image", {pushFollowers: false})
// // .addIndicators({name: "Sticky Image"}) // add indicators (requires plugin)
// .addTo(controller);


var bgAnnaTween1 = bgAnna1
                    //     .to(".anna-home", { backgroundColor: "#ecd48c", ease: Linear.easeNone})
                        .to(".marquee span", {css:{color: "#e3b79a"}, ease: Linear.easeNone})
                        .to(".footer-desktop", {css:{color: "#e3b79a"}, ease: Linear.easeNone})
                        .to(".footer-text", {css:{color: "#e3b79a"}, ease: Linear.easeNone})
                        .to(".footer-line", {css:{borderColor: "#e3b79a"}, ease: Linear.easeNone})                        
                        .to(".caption-photo, .caption-photo a", {css:{color: "#bea1a5"}, ease: Linear.easeNone})

var bgAnnaScene1 = new ScrollMagic.Scene({triggerElement: ".large-copy-split-desktop", duration: 1000})    
.setTween(bgAnnaTween1)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var controller = new ScrollMagic.Controller();

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