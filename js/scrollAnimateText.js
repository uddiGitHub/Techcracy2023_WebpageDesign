gsap.registerPlugin(ScrollTrigger);


const SplitTypesHeader = document.querySelectorAll('.reveal-type-header');

SplitTypesHeader.forEach((char) => {
    const texthead = new SplitType(char, { type: 'chars' });

    const chars = [...texthead.chars];
    const charsTotal = chars.length;

    gsap.fromTo(chars, {
        'will-change': 'transform',
        opacity: 0,
        y: position => {
            const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
            return (charsTotal / 2 - factor + 6) * 130;
        }
    },
        {
            ease: 'elastic.out(.4)',
            y: 0,
            opacity: 1,
            stagger: {
                amount: 0.1,
                from: 'center'
            },
            scrollTrigger: {
                trigger: char,
                start: 'center center',
                end: '+=300 +=60%',
                markers: false,
                scrub: 2,
            }
        });
});

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
                end: '+=100%',
                scrub: 2,
                markers: false,
                pin: char.parentNode,
            },
            stagger: {
                each: 0.006,
                from: 'random'
            }
        });
});

const splitTypesThemes = document.querySelectorAll('.themeHighlight');

splitTypesThemes.forEach((char) => {
    const themeText = new SplitType(char, { type: 'chars' });

    const themechars = [...themeText.chars];
    const charsTotal = themechars.length;

    themechars.forEach((char, index) => {
        gsap.fromTo(char, {
            'will-change': 'transform, filter',
            transformOrigin: '50% 100%',
            scale: position => {
                const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                return gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0.5, 2.1, factor);
            },
            y: position => {
                const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                return gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0, 60, factor);
            },
            rotation: position => {
                const factor = position < Math.ceil(charsTotal / 2) ? position : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                return position < charsTotal / 2 ? gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), -4, 0, factor) : gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0, 4, factor);
            },
            filter: 'blur(12px) opacity(0)',
        },
            {
                ease: 'power2.inOut',
                y: 0,
                rotation: 0,
                scale: 1,
                filter: 'blur(0px) opacity(1)',
                scrollTrigger: {
                    trigger: char,
                    start: 'bottom-=80 center',
                    end: 'bottom+=80 center',
                    scrub: 1,
                    markers: false
                },
                stagger: {
                    amount: 0.15,
                    from: 'center'
                }
            });
    });
});

// // smooth scroll
// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//     console.log(e)
// })

// function raf(time) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)