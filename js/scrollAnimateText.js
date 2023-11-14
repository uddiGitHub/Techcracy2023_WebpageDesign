gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char) => {
    const text = new SplitType(char, { type: 'words' });

    const words = [...text.words];
    words.forEach(word => gsap.set(word.parentNode, { perspective: 1000 }));

    gsap.fromTo(words, {
        'will-change': 'opacity, transform',
        z: () => gsap.utils.random(500, 950),
        opacity: 0,
        xPercent: () => gsap.utils.random(-100, 100),
        yPercent: () => gsap.utils.random(-10, 10),
        rotationX: () => gsap.utils.random(-90, 90)
    },
    {
        ease: 'expo',
        opacity: 1,
        rotationX: 0,
        rotationY: 0,
        xPercent: 0,
        yPercent: 0,
        z: 0,
        scrollTrigger: {
            trigger: char,
            start: 'center center',
            end: '+=300%',
            scrub: 2,
            pin: char.parentNode,
        },
        stagger: {
            each: 0.006,
            from: 'random'
        }
    });
});





// smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)