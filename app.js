document.addEventListener("DOMContentLoaded", function () {
    lenisScroll();
    navScroll();
    pageDark();
    swipper();
    autoSlider();
    quotesCome();
    textChange();
    onYourFeet();
    mouseMove();
    mouseBigger();
})

function navScroll() {
    gsap.to("nav", {
        background: "black",
        height: "110px",
        ease: "power2.inOut",
        duration: 0.5,
        scrollTrigger: {
            // markers: true,
            trigger: "nav",
            scroller: "body",
            start: "40vh top",
            end: "45vh top",
            scrub: 1
        }
    })
}

function pageDark() {
    gsap.to("#main", {
        background: "linear-gradient(180deg, rgba(0, 0, 0, 1) 30%, black)",
        scrollTrigger: {
            // markers: true,
            trigger: "nav",
            scroller: "body",
            start: "600px center",
            end: "1400px center",
            scrub: 1
        }
    })
}

function lenisScroll() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}

function swipper() {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
}

function autoSlider() {
    var swiper = new Swiper(".mover", {
        slidesPerView: 5.9,
        spaceBetween: 40,
        freeMode: true,
        loop: true,
    });
}

function quotesCome() {
    let t = document.querySelector(".content .up");
    let b = document.querySelector(".content .down");
    gsap.to(t, {
        top: "15%",
        left: "8%",
        scrollTrigger: {
            start: "top 65%",
            end: "top 65%",
            trigger: ".page5",
            // markers: true,
            scrub: 2
        }
    })
    gsap.to(b, {
        right: "8%",
        bottom: "15%",
        scrollTrigger: {
            start: "top 65%",
            end: "top 65%",
            trigger: ".page5",
            // markers: true,
            scrub: 2
        }
    })
}

function textChange() {
    let lines = [
        "Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven’t been.",
        "Pleasantly surprised to discover the mini golf is open until 10pm during weekdays 😊 Always enjoy visit here, cafe does some nice goodies too 👍🏽",
        "Definitely one of the best places to hit some golf balls, the TopTracer in most of the bays is a fantastic addition for the price! I’m yet to try the Mini golf but everyone seems to be having fun over there!",
        "Absolutely loved the experience! The staff looked after me ensured I was enjoying the range and gave me helpful tips to get the best out of my game. Digital screens to see my progress. I’ll be back 😁 🏌🏽‍♀️",
        "I absolutely love the adventure golf here. It seems every time I come they’ve added a new feature. My mum and I usually come together and it’s such a laugh. The designs for the holes are creative and the two different courses makes it more fun as you can complete both and compare your scores!",
        "Great facilities — loads of bays in the driving range with many coloured targets to aim for and a ball tracking monitor to see if you’re getting close."
    ]

    let index = 0

    setInterval(() => {
        document.querySelector(".content .text").innerHTML = lines[index];
        if (index === lines.length - 1) {
            index = 0;
        } else {
            index = index + 1;
        }
    }, 5000);

}

function onYourFeet() {
    gsap.from(".page6>h1", {
        top: "35%",
        scrollTrigger: {
            // markers: true,
            trigger: ".page6 h1",
            start: "top 80%",
            end: "top 80%",
            scrub: 2
        }
    })
}

function mouseMove() {
    let sm = document.getElementById("smallMouse")
    let bm = document.getElementById("bigMouse")
    document.addEventListener("mousemove", function(e) {
        gsap.to(sm, {
            left: e.clientX,
            top: e.clientY
        })
        gsap.to(bm, {
            left: e.clientX,
            top: e.clientY,
            duration: 2,
        })
    })
}

function mouseBigger() {
    let all = document.querySelectorAll(".mouseBig");
    let sm = document.getElementById("smallMouse");
    all.forEach((e) => {
        e.addEventListener("mouseover", () => {
            gsap.to(sm, {
                width: "70px",
                height: "70px",
                background: "transparent",
                border: "2.5px solid #fff"
            })
        })
        e.addEventListener("mouseleave", () => {
            gsap.to(sm, {
                width: "20px",
                height: "20px",
                background: "#92B60A",
                border: "none"
            })
        })
    })
}