function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locoScroll();

function cursorEffect() {
  var page1Content = document.querySelector(".page1_content");
  var cursor = document.querySelector(".cursor");

  page1Content.addEventListener("mousemove", function (val) {
    gsap.to(cursor, {
      x: val.x,
      y: val.y,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();

function page2Animation() {
  gsap.from(".page2_el h1", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      // markers:true,
      scrub: 2,
    },
  });
}
page2Animation();

function page4Animation() {
  gsap.from(".page4_el h1", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      // markers:true,
      scrub: 2,
    },
  });
}
page4Animation();

function page5Cursor() {
  var page5 = document.querySelector("#page5");
  var cursor2 = document.querySelector(".cursor2");

  page5.addEventListener("mousemove", function (val) {
    gsap.to(cursor2, {
      x: val.x,
      y: val.y,
    });
  });

  page5.addEventListener("mouseenter", function () {
    gsap.to(cursor2, {
      scale: 1,
      opacity: 1,
    });
  });

  page5.addEventListener("mouseleave", function () {
    gsap.to(cursor2, {
      scale: 0,
      opacity: 0,
    });
  });
}
page5Cursor();

function page6Animation() {
  gsap.from(".page6_el h1", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      // markers:true,
      scrub: 2,
    },
  });
}
page6Animation();

function sliderAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
}
sliderAnimation();

var tl = gsap.timeline();

tl.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

tl.to("#loader h3", {
  opacity: 0,
  x: -20,
  duration: 1,
  stagger: 0.1,
});

tl.to("#loader", {
  opacity: 0,
});

tl.from(".page1_content h1 span", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
  delay: -0.5,
});

tl.to("#loader", {
  display: "none",
});

function page8Animation() {
  gsap.from("#page8 h2", {
    y: 120,
    stagger: 0.5,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 55%",
      end: "top 52%",
      // markers:true,
      scrub: 2,
    },
  });
}
page8Animation();
