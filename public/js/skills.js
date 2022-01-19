const technologiesItemArray = Array.from(document.querySelectorAll('.technologies_item'))

//borders remove

let e = 0;
let p = 0;
let lenghtOfArray = technologiesItemArray.length


for (i = 0; i < technologiesItemArray.length; i++) {
    if (window.innerWidth > 980) {
        if (e == 0) {
            technologiesItemArray[i].style.borderLeft = "none"
        }
        e++
        p++
        if (e == 4) {
            e = 0
        }
        if (p > technologiesItemArray.length - 4) {
            technologiesItemArray[i].style.borderBottom = "none"
        }
    }
    else {
        technologiesItemArray[technologiesItemArray.length - 1].style.borderBottom = 'none'
        technologiesItemArray[technologiesItemArray.length - 2].style.borderBottom = 'none'
    }
}