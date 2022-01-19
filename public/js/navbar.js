const header = document.querySelector('header');
const nav = document.querySelector('nav');
const togglerSpans = document.querySelectorAll('#header_toggler span');
const togglerSpanArray = Array.from(togglerSpans);
const logoImage = document.querySelector('#header_logo a img');
const navLinksArray = Array.from(document.querySelectorAll('#main_nav a'))

function animationLogo() {
    logoImage.style.opacity = "0";
    setTimeout(() => {
        logoImage.style.opacity = "1";
    }, 200);
}

function activeToggler() {
    togglerSpanArray[1].style.transform = "translateX(30px)"
    togglerSpanArray[1].style.opacity = "0"
    togglerSpanArray[0].style.transform = "rotate(-45deg) translateY(14px)"
    togglerSpanArray[2].style.transform = "rotate(45deg) translateY(-14px)"
    for (i = 0; i < togglerSpanArray.length; i++) {
        togglerSpanArray[i].style.background = "#000"
    }
}

function inactiveToggler() {
    togglerSpanArray[1].style.transform = "translateX(0px)"
    togglerSpanArray[1].style.opacity = "1"
    togglerSpanArray[0].style.transform = "rotate(0) translateY(0px)"
    togglerSpanArray[2].style.transform = "rotate(0) translateY(0px)"
}

function basicStylesHeader() {
    header.style.background = "none";
    for (i = 0; i < togglerSpanArray.length; i++) {
        togglerSpanArray[i].style.background = "#fff"
    }
    setTimeout(() => {
        logoImage.setAttribute('src', './assets/img/logo-white.svg')
    }, 150);
}

function whiteStylesHeader() {
    header.style.background = "#fff";
    setTimeout(() => {
        logoImage.setAttribute('src', './assets/img/logo.svg')
    }, 150);
    for (i = 0; i < togglerSpanArray.length; i++) {
        togglerSpanArray[i].style.background = "#000"
    }
}

function hideLinks() {
    for (e = 0; e < navLinksArray.length; e++) {
        navLinksArray[e].classList.remove('showLink')
    }
    nav.classList.remove('activeNav');
}

document.querySelector('#header_toggler').addEventListener('click', () => {
    nav.classList.toggle('activeNav');
    let e = 0;

    if (nav.classList.contains('activeNav')) {
        animationLogo()

        whiteStylesHeader()

        activeToggler()
        const animationShowLinks = setInterval(function () {
            navLinksArray[e].classList.add('showLink');
            if (++e === navLinksArray.length) {
                window.clearInterval(animationShowLinks);
                e = 0
            }
        }, 200);
    }
    else {

        if (window.scrollY == 0) {
            basicStylesHeader()
        }
        else {
            whiteStylesHeader()
            header.style.background = "#fff"
        }
        inactiveToggler()
        hideLinks()
    }
})



window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        whiteStylesHeader()
    }
    else {
        if (nav.classList.contains('activeNav')) {
            whiteStylesHeader()
        }
        else {
            basicStylesHeader()
        }

    }
})

for (i = 0; i < navLinksArray.length; i++) {
    navLinksArray[i].addEventListener('click', () => {
        hideLinks()
        inactiveToggler()
        if (window.scrollY == 0) {
            basicStylesHeader()
        }
    })
}