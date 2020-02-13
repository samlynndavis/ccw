var controller = new ScrollMagic.Controller();

const nevScroll = gsap.timeline();

gsap.set(".large-copy p", {css:{opacity: "0"}})


var nevTween = nevScroll
                    .to(".nev-home", { duration: 0.4, css:{backgroundColor: "#ba201e"}, ease: Power4.easeInOut}, 0)
                    .to(".large-copy p", { duration: 0.4, css:{color: "#FFB606", opacity: "1"}, ease: Power4.easeInOut}, 0)


var nevScene = new ScrollMagic.Scene({ triggerElement: ".large-copy-split"})
.setTween(nevTween)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);


const nevInfluence = new TimelineMax();

var nevTween2 = nevInfluence
                    .fromTo(".influences p:nth-child(1)", {opacity: 0, x:"-200%"}, {css:{opacity: 1, x:"0"}, ease: Power4.easeInOut})
                    .fromTo(".influences p:nth-child(2)", {opacity: 0, x:"200%"}, {css:{opacity: 1, x:"0"}, ease: Power4.easeInOut})
                    .fromTo(".influences p:nth-child(3)", {opacity: 0, x:"-200%"}, {css:{opacity: 1, x:"0"}, ease: Power4.easeInOut})
                    .fromTo(".influences p:nth-child(4)", {opacity: 0, x:"200%"}, {css:{opacity: 1, x:"0"}, ease: Power4.easeInOut})
                    .fromTo(".nev-influences", {backgroundColor: "#ba201e"}, {css:{backgroundColor: "#ba201e"}, ease: Power4.easeInOut})

var nevScene2 = new ScrollMagic.Scene({ triggerElement: ".nev-influences", triggerHook: "0", duration: "600%"})
.setTween(nevTween2)
.setPin(".nev-influences", {pushFollowers: true})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);


const nevEars = gsap.timeline();

gsap.set('.ears', {css:{x:"-100%", opacity: 0, color: "#FFb606"}});
gsap.set('.ears-2', {css:{x:"100%", opacity: 0, color: "#FFb606"}});


var nevTween3 = nevEars
                    .to('.ears', 1, {css:{x:"0%", opacity: 1}, ease: Power4.easeInOut}, 0)
                    .to('.ears-2', 1, {css:{x:"0%", opacity: 1}, ease: Power4.easeInOut}, 0)
                    .to('.nev-home', 1, {css:{backgroundColor:"#95ac7d"}, ease: Power4.easeInOut, delay: 0.1}, 0)

var nevScene3 = new ScrollMagic.Scene({ triggerElement: ".nev-music", offset:50, duration: 300})
.setTween(nevTween3)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);


