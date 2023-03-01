addEventListener('DOMContentLoaded', () => {

    const selectors = {
        burger: document.querySelector('.main-header__hamburger'),
        mobileNav: document.querySelector('.main-header__nav'),
        body: document.querySelector('body'),
        loader: document.querySelector('.loader'),
    }

    const css = {
        active: 'active',
        hidden: 'hidden',
    }

    const toggleClass = (selector, className) => {
        selector.classList.toggle(`${className}`);
    }

    const removeClass = (selector, className) => {
        selector.classList.remove(`${className}`);
    }


    selectors.burger.addEventListener('click', () => {
        toggleClass(selectors.burger, css.active);
        toggleClass(selectors.mobileNav, css.active);
        toggleClass(selectors.body, css.hidden);
    });

    selectors.mobileNav.addEventListener('click', () => {
        removeClass(selectors.burger, css.active);
        removeClass(selectors.mobileNav, css.active);
        removeClass(selectors.body, css.hidden);
    });

    const copyTextAfterClick = document.querySelector('.js-copy');

    copyTextAfterClick.addEventListener('click', () => {
        const textContent = copyTextAfterClick.textContent;

        navigator.clipboard.writeText(textContent);
        alert('✔️ Mail copied to clipboard');
    })
});