let cursor=document.querySelector("#cursor")
let cursorBlur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function
    (dets){
    cursor.style.left=dets.x+"px"
    cursor.style.top=dets.y+"px"
    cursorBlur.style.left=dets.x-150+"px"
    cursorBlur.style.top=dets.y-150+"px"

    }
)
gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start: "top -10%",
    end: "top -11%",
    scrub: 1
    }
})
gsap.to("#main",{
    backgroundColor:"black",
    duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2

    }
    }) 
    gsap.from("#about-us img, #about-us-in",{
        y:50,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#about-us",
            scroller:"body",
            start:"top 70%",
            end:"top 65%",
            scrub:1
        }
    })
    gsap.from(".card",{
        y:70,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#cards-container",
            scroller:"body",
           
            start:"top 65%",
            end:"top 60%",
            scrub:1
        }
    })
    gsap.from("#colon1", {
        y: -70,
        x: -70,
        scrollTrigger: {
          trigger: "#colon1",
          scroller: "body",
          start: "top 55%",
          end: "top 45%",
          scrub: 1,
        },
    })
    gsap.from("#colon2", {
        y: 70,
        x: 70,
        scrollTrigger: {
          trigger: "#colon2",
          scroller: "body",
          start: "top 70%",
          end: "top 75%",
          scrub: 1,
        },
    })