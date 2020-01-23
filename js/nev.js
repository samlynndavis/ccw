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
 var controller = new ScrollMagic.Controller();

 const stickerMove = new gsap.timeline({
   defaults: {
     delay: 0.5
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

     var stickerScene = new ScrollMagic.Scene({triggerElement: "#strips", offset: 300})    
    .setTween(stickerMove)
    // .setPin("#target", {pushFollowers: false})
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  }

  stickerScroll();
