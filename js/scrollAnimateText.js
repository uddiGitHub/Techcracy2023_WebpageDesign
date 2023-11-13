gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char) => {
    const text = new SplitType(char, { type: 'chars'})

    gsap.from(text.words, {
        scrollTrigger: ".reveal-type",
        // scrollTrigger: {
        //     trigger: '.reveal-type',
        //     // endTrigger: char,
        //     start: 'bottom',
        //     // end: 'top 20%',
        //     scrub: true,
        //     markers: true
        // },
        y: 100,
        opacity: 0,
        stagger: 0.01
    })
})





// smooth scroll
// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)