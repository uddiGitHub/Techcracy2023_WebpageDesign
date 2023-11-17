gsap.registerPlugin(ScrollTrigger);

function initLocomotiveScroll() {
    const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locomotiveScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locomotiveScroll.scrollTo(value, 0, 0) : locomotiveScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update());
    ScrollTrigger.refresh();
}

function initCanvasAnimation() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    canvas.style.pointerEvents = "none";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    const frameCount = 110;
    const images = [];
    const imageSeq = { frame: 1 };

    function files(index) {
        const path = "images/comic/";
        return `${path}${index.toString().padStart(4, '0')}.png`;
    }

    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: true,
            trigger: `#home>canvas`,
            start: `top top`,
            end: `600% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
}

function initCanvasPin() {
    ScrollTrigger.create({
        trigger: "#home>canvas",
        pin: true,
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initLocomotiveScroll();
    initCanvasAnimation();
    initCanvasPin();
});
