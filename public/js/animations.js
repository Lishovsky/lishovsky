//section One animation

const headerElement = document.querySelector('header')
const sectionOneP = document.querySelector
    ('#sectionOne_Box p')
const sectionOneLogo = document.querySelector('#sectionOne_Box img')

let time = 80


let nextChar = 0;
const firstElement = document.querySelector('#firstElementToTypping');
const secondElement = document.querySelector('#secondElementToTypping');
let firstWords = firstElement.textContent
let lastWord = secondElement.textContent
let whenStartSecondElement = firstWords.length * time

firstElement.textContent = " "
secondElement.textContent = " "

window.onload = setTimeout(() => {


    const typpingFirst = setInterval(
        function typpingFirstElement() {
            firstElement.textContent += firstWords[nextChar]
            nextChar++
            if (nextChar === firstWords.length) {
                clearInterval(typpingFirst);
                nextChar = 0
                const typpingSecond = setInterval(
                    function typpingSecondtElement() {
                        secondElement.textContent += lastWord[nextChar]
                        nextChar++
                        if (nextChar === lastWord.length) {
                            clearInterval(typpingSecond);
                            nextChar = 0
                        }
                    }, time)
            }
        }, time)



    sectionOneLogo.style.transform = "translateY(0px)";
    sectionOneLogo.style.opacity = '1';
    sectionOneP.style.opacity = '1';
    sectionOneP.style.transform = "translateY(0px)";
    headerElement.style.opacity = "1"
    headerElement.style.transform = "translateY(0px)";
    setTimeout(() => {
        headerElement.style.transition = "200ms"
    }, 200)

}, 200)


//animations event from sectionTwo to sectionSix

const sections = Array.from(document.querySelectorAll('section'))
const arrayWithDistance = [];
const arrayWithHeights = [];
const headingsArray = Array.from(document.querySelectorAll('h2'));
headingsArray.shift()
headingsArray.shift()
const arrayWithElementsToFade = Array.from(document.querySelectorAll('.rightAnimation'));

for (i = 0; i < sections.length; i++) {
    arrayWithDistance.push(sections[i].offsetTop)
    arrayWithHeights.push(sections[i].offsetHeight)
}

//slide in
function headingSlideIn(number) {
    headingsArray[number].style.opacity = "1";
    headingsArray[number].style.transform = "translateX(0)";
    arrayWithElementsToFade[number].style.opacity = "1";
    arrayWithElementsToFade[number].style.transform = "translateX(0)";
}

//fadeIn
function fadeInAnimation(number) {
    const arrayWithElements = Array.from(document.querySelectorAll('.fadeInAnimation'))
    arrayWithElements[number].style.opacity = "1";
    arrayWithElements[number].style.transform = 'translateY(0)'
}

function slideToTopElement() {
    const firstElement = document.querySelector('.box_item:nth-child(1)')
    const secondElement = document.querySelector('.box_item:nth-child(2)')
    firstElement.style.transform = "translateX(0)";
    firstElement.style.opacity = "1";
    secondElement.style.transform = "translateX(0)";
    secondElement.style.opacity = "1";
    setTimeout(() => {
        firstElement.style.borderRight = "3px solid #eee"
    }, 600)

}

//skills items animation
const skillsArrayItems = Array.from(document.querySelectorAll('.technologies_item'));
const skillsArrayHeights = []
const skillsArrayDistance = []

for (i = 0; i < skillsArrayItems.length; i++) {
    skillsArrayDistance.push(skillsArrayItems[i].offsetTop)
    skillsArrayHeights.push(skillsArrayItems[i].offsetHeight)
}

window.addEventListener('scroll', () => {

    //skills

    for (i = 0; i < skillsArrayItems.length; i++) {
        if (window.scrollY > skillsArrayDistance[i] - skillsArrayHeights[i] - 220) {
            skillsArrayItems[i].style.opacity = "1"
        }
    }

    //others animation
    for (i = 0; i < sections.length; i++) {
        if (window.scrollY > arrayWithDistance[i] + arrayWithHeights[i] - 600) {
            if (i == 0) {
                headingSlideIn(0)
            }
            if (i == 1) {
                headingSlideIn(1)
            }
            if (i == 2) {
                headingSlideIn(2)
            }
            if (i == 3) {
                headingSlideIn(3)
                slideToTopElement()
            }
            if (i == 4) {
                headingSlideIn(4)
            }
        }
        if (window.scrollY > arrayWithDistance[i] + arrayWithHeights[i] - 300) {
            if (i == 3) {
                fadeInAnimation(3)
            }
        }
        if (window.scrollY > arrayWithDistance[i] + arrayWithHeights[i] - 300) {
            if (i == 1) {
                fadeInAnimation(0)
            }
            if (i == 2) {
                headingSlideIn(2)
                fadeInAnimation(1)
                fadeInAnimation(2)
            }
            if (i == 4) {
                fadeInAnimation(4)
            }
        }
    }
})