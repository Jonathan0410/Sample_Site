import Lenis from "lenis";

export function initSmoothScroll() {

    const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        syncTouch: true
    });


    function raf(time) {

        lenis.raf(time);

        requestAnimationFrame(raf);

    }


    requestAnimationFrame(raf);


    return lenis;
}