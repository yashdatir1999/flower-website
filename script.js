gsap.to(".flower-image",{
    top: "-25%",
    // duration:1,
    scrollTrigger:{
        trigger:".page2",
        scroler:"body",
        // start:"top 60%",
        // markers: true,
        scrub:1,
        start: "top 80%",
        // end: "top 70%"
      }
    
})
var btnleft = document.querySelector(".ri-arrow-left-double-line")
var btnright = document.querySelector(".ri-arrow-right-double-line")
var box = document.querySelector(".page3-boxs")
// var comnbox = document.querySelector(".page3-box1")
var counter = 0
btnleft.addEventListener("click",function(){
    if(counter < 1200){
        counter +=200
        box.scrollTo(counter , 0)
        box.style.transform=`skew(10deg)`
        console.log(counter)
        setTimeout(function(){
            box.style.transform=`skew(0deg)`
        },200)
    }else{
        counter = 1200
    }
})
btnright.addEventListener("click",function(){
    if(counter >0){
        counter -=200
        box.scrollTo(counter , 0)
        box.style.transform=`skew(-10deg)`
        setTimeout(function(){
            box.style.transform=`skew(0deg)`
        },200)
    }else{
        counter = 200
    }

})