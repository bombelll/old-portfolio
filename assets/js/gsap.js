const disableAlertBtn = document.querySelector('.js-disable-btn');

setTimeout(() => {
    let tl = gsap.timeline();

    tl.to('.loader__wrapper', {
        scale: 0,
        ease: "bounce.out",
    })

    tl.to('.loader', {
        opacity: 0,
        display: 'none'
    }, '+=.5')

    tl.from('.js-box', {
        y: -200,
    })

    document.body.style.overflow = 'auto';
}, 1500);


const alertFadeOut = () => {
    gsap.to('.js-box', {
        opacity: 0,
        display: 'none',
    })
};

setTimeout(alertFadeOut, 12000);
disableAlertBtn.addEventListener('click', alertFadeOut);