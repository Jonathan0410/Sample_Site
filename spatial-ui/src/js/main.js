import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { initThreeScene } from "./three-scene.js";
import { initSmoothScroll } from "./scroll.js";

console.log("Spatial UI initialized.");

initThreeScene();
initSmoothScroll();

/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const mobileMenu =
    document.querySelector(".mobile-menu");

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


if (menuToggle && mobileMenu) {

    menuToggle.addEventListener(
        "click",
        () => {

            menuToggle.classList.toggle("active");

            mobileMenu.classList.toggle("active");

        }
    );


    mobileLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                menuToggle.classList.remove("active");

                mobileMenu.classList.remove("active");

            }
        );

    });

}
/* =========================================
   HERO INTRO ANIMATION
========================================= */

function initHeroAnimation() {

    const timeline = gsap.timeline({
        defaults: {
            ease: "power4.out"
        }
    });


    /* Header */

    timeline.from(
        ".site-header",
        {
            y: -30,
            opacity: 0,
            duration: 1
        }
    );


    /* Small label */

    timeline.to(
        ".hero-label",
        {
            opacity: 1,
            y: 0,
            duration: 0.8
        },
        "-=0.5"
    );


    /* Main heading */

    timeline.to(
        ".hero-line",
        {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.12
        },
        "-=0.4"
    );


    /* Description */

    timeline.to(
        ".hero-description",
        {
            opacity: 1,
            y: 0,
            duration: 0.8
        },
        "-=0.6"
    );


    /* CTA */

    timeline.to(
        ".hero-cta",
        {
            opacity: 1,
            y: 0,
            duration: 0.8
        },
        "-=0.5"
    );
}


initHeroAnimation();
/* =========================================
   SCROLL ANIMATIONS
========================================= */

function initScrollAnimations() {

    /* ABOUT SECTION */

    gsap.from(".intro-label", {
        scrollTrigger: {
            trigger: ".spatial-intro",
            start: "top 75%",
            once: true
        },

        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });


    gsap.from(".intro-content h2", {
        scrollTrigger: {
            trigger: ".spatial-intro",
            start: "top 70%",
            once: true
        },

        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    });


    gsap.from(".intro-content p", {
        scrollTrigger: {
            trigger: ".spatial-intro",
            start: "top 65%",
            once: true
        },

        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out"
    });


    /* SERVICES HEADING */

    gsap.from(".section-heading", {
        scrollTrigger: {
            trigger: ".services-preview",
            start: "top 75%",
            once: true
        },

        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    });


    /* SERVICE CARDS */

    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: ".service-grid",
            start: "top 75%",
            once: true
        },

        y: 80,
        opacity: 0,
        scale: 0.96,

        duration: 0.9,

        stagger: 0.15,

        ease: "power4.out"
    });


    /* FINAL CTA */

    gsap.from(".spatial-end .hero-label", {
        scrollTrigger: {
            trigger: ".spatial-end",
            start: "top 75%",
            once: true
        },

        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });


    gsap.from(".spatial-end h2", {
        scrollTrigger: {
            trigger: ".spatial-end",
            start: "top 70%",
            once: true
        },

        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    });


    gsap.from(".spatial-end .btn", {
        scrollTrigger: {
            trigger: ".spatial-end",
            start: "top 65%",
            once: true
        },

        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out"
    });
}


initScrollAnimations();
/* =========================================
   ABOUT SECTION
========================================= */

gsap.from(".about-top", {

    scrollTrigger: {

        trigger: ".spatial-intro",

        start: "top 75%",

        once: true
    },

    y: 30,

    opacity: 0,

    duration: 0.8,

    ease: "power3.out"
});


gsap.from(".about-heading h2", {

    scrollTrigger: {

        trigger: ".about-main",

        start: "top 75%",

        once: true
    },

    y: 100,

    opacity: 0,

    duration: 1.2,

    ease: "power4.out"
});


gsap.from(".about-copy", {

    scrollTrigger: {

        trigger: ".about-main",

        start: "top 70%",

        once: true
    },

    y: 60,

    opacity: 0,

    duration: 1,

    delay: 0.15,

    ease: "power4.out"
});


gsap.from(".stat-item", {

    scrollTrigger: {

        trigger: ".about-stats",

        start: "top 80%",

        once: true
    },

    y: 40,

    opacity: 0,

    duration: 0.8,

    stagger: 0.12,

    ease: "power3.out"
});
gsap.from(".stat-item strong", {

    scrollTrigger: {

        trigger: ".about-stats",

        start: "top 80%",

        once: true
    },

    scale: 0.8,

    opacity: 0,

    duration: 1,

    stagger: 0.12,

    ease: "back.out(1.7)"
});
/* =========================================
   SERVICE CARD 3D TILT
========================================= */

function initServiceTilt() {
    if (window.innerWidth <= 768) return;

    const cards =
        document.querySelectorAll(".service-card");


    cards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) / centerY) * -4;

                const rotateY =
                    ((x - centerX) / centerX) * 4;


                gsap.to(card, {

                    rotateX,

                    rotateY,

                    scale: 1.015,

                    duration: 0.4,

                    ease: "power2.out",

                    overwrite: true

                });

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                gsap.to(card, {

                    rotateX: 0,

                    rotateY: 0,

                    scale: 1,

                    duration: 0.7,

                    ease: "power3.out"

                });

            }
        );

    });

}


initServiceTilt();
/* =========================================
   FEATURED WORK
========================================= */

gsap.from(".work-header", {

    scrollTrigger: {

        trigger: ".work-section",

        start: "top 75%",

        once: true

    },

    y: 70,

    opacity: 0,

    duration: 1,

    ease: "power4.out"

});


gsap.from(".project", {

    scrollTrigger: {

        trigger: ".work-list",

        start: "top 75%",

        once: true

    },

    y: 100,

    opacity: 0,

    duration: 1.1,

    stagger: 0.2,

    ease: "power4.out"

});
