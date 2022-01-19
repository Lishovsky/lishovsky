const arrows = Array.from(document.querySelectorAll('.works_Box_arrow img'))
const bottomNavigation = Array.from(document.querySelectorAll('#navigation span'))
let slideNumber = 0;
const sliders = {
    sourcesImage: ['hawaii.png', 'pizzatheme.png', 'lishovsky.png', 'rezerwacje.png', 'wnorowska.png'],
    githubLinks: ['https://github.com/Lishovsky/hawaii-web', 'https://github.com/Lishovsky/pizzaTheme', 'lishovsky.html', 'https://github.com/Lishovsky/reservation-system', 'https://github.com/Lishovsky/wnorowska-studio'],
    names: ['hawaii-katowice.pl', 'Pizzeria Moniri', 'lishovsky.pl', '.rezerwacje.hawaii-katowice.pl', 'wnorowskastudio.pl'],
    description: ['company website', 'wordpress template', 'My portfolio', 'reservation system', 'company website'],
};
const slider = document.querySelector('#works_Box_item');
const sliderImage = document.querySelector('#works_Box_item_image img')
const nameElement = document.querySelector('#works_Box_item_link h4')
const descriptionElement = document.querySelector('#works_Box_item_link h3')
const linkElement = document.querySelector('#gitubLink')

function changeSlide() {
    slider.style.animation = "sliderAnimation 600ms linear"
    setTimeout(() => {
        sliderImage.setAttribute('src', `assets/img/${sliders.sourcesImage[slideNumber]}`)
        nameElement.innerHTML = `${sliders.names[slideNumber]}`;
        descriptionElement.innerHTML = `${sliders.description[slideNumber]}`;
        linkElement.setAttribute('href', `${sliders.githubLinks[slideNumber]}`);
    }, 300)
    setTimeout(() => slider.style.animation = "none", 600)
    for (e = 0; e < bottomNavigation.length; e++) {
        bottomNavigation[e].classList.remove('activeSpan');
    }
    bottomNavigation[slideNumber].classList.add('activeSpan')
}

//arrows click
for (i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', (event) => {
        if (this.event.target == arrows[0]) {
            if (slideNumber == 0) {
                slideNumber = 0
            }
            else {
                slideNumber--
                changeSlide()
            }
        }
        else {
            if (slideNumber == sliders.sourcesImage.length - 1) {
                slideNumber = sliders.sourcesImage.length - 1
            }
            else {
                slideNumber++
                changeSlide()
            }
        }
    })
}

//bottom navigation item click
for (i = 0; i < bottomNavigation.length; i++) {
    bottomNavigation[i].addEventListener('click', (event) => {
        for (e = 0; e < bottomNavigation.length; e++) {
            bottomNavigation[e].classList.remove('activeSpan');
        }
        bottomNavigation[bottomNavigation.indexOf(this.event.target)].classList.add('activeSpan')
        slideNumber = bottomNavigation.indexOf(this.event.target)
        changeSlide()
    })
}