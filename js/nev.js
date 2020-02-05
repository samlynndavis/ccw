   //   const defaultColor = () => {
   //     $(".marquee span").css({"color": "#f4ecc5"});
   //     $(".footer-text").css({"color": "#f4ecc5"});
   //     $(".footer-line").css({"border-color": "#f4ecc5"});
   //     }

   //   const bottomColor = () => {
   //     $(".marquee span").css({"color": "#FFB606"});
   //     $(".footer-text").css({"color": "#FFB606"});
   //     $(".footer-line").css({"border-color": "#FFB606"});
   //     }

   //     const footerTicker = document.querySelector(".marquee span")

   //   $(document).ready(function () {
   //     defaultColor();
   //   });

   //    function scrollFunction() {
   //       if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
   //         bottomColor();
   //       }
   //     };

   //   window.onscroll = function() {
   //     scrollFunction();
   // };

const stickerScroll = () => {
//  var controller = new ScrollMagic.Controller();

 const stickerMove = new gsap.timeline({
  paused: true,
  reversed: true,
   defaults: {
   }
 });

   stickerMove.to('.strip.-five', {
       duration: 1,
       x: '-90vw',
       ease: Power4.easeInOut
     }, 0)
     .to('.strip.-six', {
       duration: 1,
       x: '30vw',
       ease: Power4.easeInOut
     }, 0)
     .to('.strip.-two', {
       duration: 1,
       x: '-80vw',
       ease: Power4.easeInOut
     }, 0)
     .to('.strip.-one', {
       duration: 1,
       x: '-50vw',
       ease: Power4.easeInOut
     }, 0)
     .to('.strip.-seven', {
       duration: 0.7,
       opacity: 0,
       x: '0vw',
       ease: Power4.easeInOut
     }, 0)
     .to('.strip.-four', {
       duration: 1,
       x: '70vw',
       ease: Power4.easeInOut
     }, 0)
     .to('.strip.-three', {
       duration: 1,
       x: '-50vw',
       ease: Power4.easeInOut
     }, 0)
     .to('.strip.-nine', {
       duration: 1,
       x: '20vw',
       ease: Power4.easeInOut
     }, 0)
     .to('.strip.-eight', {
       duration: 1,
       x: '-2vw',
       ease: Power4.easeInOut
     }, 0)

     $(".nev-sticker").mouseenter(function(){
      stickerMove.play()
     });

     $(".nev-sticker").mouseleave(function(){
      stickerMove.reverse();
     });

    }
     
    //  $(".nev-sticker").addEventListener("mouseout", mouseOut);
    

  //    var stickerScene = new ScrollMagic.Scene({triggerElement: "#strips", offset: 300})    
  //   .setTween(stickerMove)
  //   // .setPin("#target", {pushFollowers: false})
  //   .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);

  // }

  stickerScroll();


var controller = new ScrollMagic.Controller();

const nevScroll = gsap.timeline();

gsap.set(".large-copy p", {css:{opacity: "0"}})


var nevTween = nevScroll
                    .to(".nev-home", { duration: 0.4, css:{backgroundColor: "#ba201e"}, ease: Power4.easeInOut}, 0)
                    .to(".large-copy p", { duration: 0.4, css:{color: "#FFB606", opacity: "1"}, ease: Power4.easeInOut}, 0)


var nevScene = new ScrollMagic.Scene({ triggerElement: ".large-copy-split"})
.setTween(nevTween)
// .setPin("#target", {pushFollowers: false})
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


const nevInfluence = new TimelineMax();


var nevTween2 = nevInfluence
                    .fromTo(".influences p:nth-child(1)", 1, {opacity: 0, x:"-100%"}, {css:{opacity: 1, x:"0"}, ease: Power4.easeInOut})
                    .fromTo(".influences p:nth-child(2)", 1, {opacity: 0, x:"100%"}, {css:{opacity: 1, x:"0"}, ease: Power4.easeInOut})
                    .fromTo(".influences p:nth-child(3)", 1, {opacity: 0, x:"-100%"}, {css:{opacity: 1, x:"0"}, ease: Power4.easeInOut})
                    .fromTo(".influences p:nth-child(4)", 1, {opacity: 0, x:"100%"}, {css:{opacity: 1, x:"0"}, ease: Power4.easeInOut})

var nevScene2 = new ScrollMagic.Scene({ triggerElement: ".influences-wrapper", triggerHook: "0", duration: "400%"})
.setTween(nevTween2)
.setPin(".influences-wrapper", {pushFollowers: true})
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


const nevEars = gsap.timeline();

gsap.set('.ears', {css:{x:"-50%", opacity: 0, color: "#FFb606"}});
gsap.set('.ears-2', {css:{x:"50%", opacity: 0, color: "#FFb606"}});


var nevTween3 = nevEars
                    .to('.ears', 1, {css:{x:"0%", opacity: 1}, ease: Power4.easeInOut}, 0)
                    .to('.ears-2', 1, {css:{x:"0%", opacity: 1}, ease: Power4.easeInOut}, 0)
                    .to('.nev-home', 1, {css:{backgroundColor:"#95ac7d"}, ease: Power4.easeInOut, delay: 0.1}, 0)

var nevScene3 = new ScrollMagic.Scene({ triggerElement: ".nev-music", offset:200, duration: 300})
.setTween(nevTween3)
// .setPin("#target", {pushFollowers: false})
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


