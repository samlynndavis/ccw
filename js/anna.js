var controller = new ScrollMagic.Controller();

var bgAnna0 = new TimelineMax();
var bgAnna1 = new TimelineMax();
var textAnna = new TimelineMax();
var bgAnnaReverse = new TimelineMax();
var textAnna2 = new TimelineMax();
var scaleLine = new TimelineMax();
var stickImg = new TimelineMax();
                    
var bgAnnaTween0 = bgAnna0.to(".anna-home", { backgroundColor: "#652b22", ease: Linear.easeNone})   
var textAnnaTween1 = textAnna.to(".top-copy", { color: "#fff", ease: Linear.easeNone})  
var textAnnaTween2 = textAnna2.from(".large-copy-anna-solo", {opacity: 0, ease: Linear.easeNone})

$('.scale-line').each(function () {

    gsap.set(scaleLineRule, {scaleX:0, transformOrigin: "left"});
    var scaleLineRule = CSSRulePlugin.getRule(".scale-line:after");
    
    // build a tween
    var scaleLineTween = scaleLine.to($(this.scaleLineRule), { duration: 1, cssRule: {scaleX: 1}, ease: Power4.easeInOut})

    var scaleLineScene = new ScrollMagic.Scene({triggerElement: this})    
.setTween(scaleLineTween)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

});       

var bgAnnaScene0 = new ScrollMagic.Scene({triggerElement: ".large-copy-anna-solo", duration: 200})
.setTween(bgAnnaTween0)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var textAnnaScene1 = new ScrollMagic.Scene({triggerElement: ".large-copy-anna-solo", duration: 200})    
.setTween(textAnnaTween1)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var textAnnaScene2 = new ScrollMagic.Scene({triggerElement: ".large-copy-anna-solo", duration: 200})    
.setTween(textAnnaTween2)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var stickScene = new ScrollMagic.Scene({triggerElement: ".stick-image", offset: 350, duration: 3500})
.setPin(".stick-image", {pushFollowers: false})
// .addIndicators({name: "Sticky Image"}) // add indicators (requires plugin)
.addTo(controller);

var bgStickScrollT1 = new TimelineMax();
var bgStickScrollT2 = new TimelineMax();
var bgStickScrollT3 = new TimelineMax();
var bgStickScrollT4 = new TimelineMax();

bgStickScrollT1.to(".anna-home", {backgroundColor: "#652b22", ease: Linear.easeNone}, 0)
               .to(".repeatbg p", {css:{color: "#fff"}, ease: Linear.easeNone}, 0)

bgStickScrollT2.to(".anna-home", {backgroundColor: "#652b22", ease: Linear.easeNone})
               .to(".repeatbg p", {css:{color: "#ecd48c"}, ease: Linear.easeNone})

bgStickScrollT3.to(".anna-home", {backgroundColor: "#000", ease: Linear.easeNone})
               .to(".repeatbg p", {css:{color: "#ecd48c"}, ease: Linear.easeNone})

bgStickScrollT4.to(".anna-home", {backgroundColor: "#ecd48c", ease: Linear.easeNone})
            //    .to(".repeatbg p", {css:{color: "#000"}, ease: Linear.easeNone})



var bgStickScene0 = new ScrollMagic.Scene({triggerElement: ".repeatbg", offset: 500, duration: 500})    
.setTween(bgStickScrollT1)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var bgStickScene1 = new ScrollMagic.Scene({triggerElement: ".repeatbg", offset: 1800, duration: 500})    
.setTween(bgStickScrollT2)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var bgStickScene2 = new ScrollMagic.Scene({triggerElement: ".repeatbg", offset: 2800, duration: 500})    
.setTween(bgStickScrollT3)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var bgRightScene = new ScrollMagic.Scene({triggerElement: ".repeatbg", offset: 3300, duration: 500})    
.setTween(bgStickScrollT4)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);




var bgAnnaTween1 = bgAnna1
                        .to(".anna-home", { backgroundColor: "#ecd48c", ease: Linear.easeNone})
                        .to(".marquee span", {css:{color: "#652b22"}, ease: Linear.easeNone})
                        .to(".footer-desktop", {css:{color: "#652b22"}, ease: Linear.easeNone})
                        
                        .to(".caption-photo, .caption-photo a", {css:{color: "#bea1a5"}, ease: Linear.easeNone})

var bgAnnaScene1 = new ScrollMagic.Scene({triggerElement: ".large-copy-split-desktop", duration: 1000})    
.setTween(bgAnnaTween1)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var picT0 = new TimelineMax();
var picT1 = new TimelineMax();
var picT2 = new TimelineMax();
var picT3 = new TimelineMax();

picT0.to(".pic-0", {css:{className:'+=hide'}})

picT1.to(".pic-1", {css:{className:'+=show'}})

picT2.to(".pic-2", {css:{className:'+=show'}}, 0)
     .to(".pic-1", {css:{className:'+=hide'}}, 0)

picT3.to(".pic-3", {css:{className:'+=show'}}, 0)
     .to(".pic-2", {css:{className:'+=hide'}}, 0)



var picScene0 = new ScrollMagic.Scene({triggerElement: ".repeatbg", offset: 900})    
.setTween(picT0)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var picScene1 = new ScrollMagic.Scene({triggerElement: ".repeatbg", offset: 900})    
.setTween(picT1)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var picScene2 = new ScrollMagic.Scene({triggerElement: ".repeatbg", offset: 2000})    
.setTween(picT2)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var picScene3 = new ScrollMagic.Scene({triggerElement: ".repeatbg", offset: 2500})    
.setTween(picT3)
// .setPin("#target", {pushFollowers: false})
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);