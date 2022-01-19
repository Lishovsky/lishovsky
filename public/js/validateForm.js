const form = document.querySelector("form");
const wrongCharsArray = ['/', '^', '+', '(', '[', ']', '?', ')', '*', '$', '%', '&', '#'];
const elementsInForm = []

function correct(element) {
    element.classList.remove('incorrect');
    element.classList.add('correct');
}

function incorrect(element) {
    element.classList.add('incorrect');
    element.classList.remove('correct');
}

let haveMonkey = false;

const isCorrect = [false, false, false];

for (const el of form.elements) {
    elementsInForm.push(el);
    el.addEventListener("input", (e) => {
        console.log(isCorrect)
        if (e.target == elementsInForm[0]) {
            if (el.value.length >= 3) {
                correct(el);
                isCorrect[0] = true;
            }
            else {
                incorrect(el)
                isCorrect[0] = false;
            }
        }
        if (e.target == elementsInForm[2]) {
            if (el.value.length >= 3) {
                correct(el);
                isCorrect[2] = true;
            }
            else {
                incorrect(el)
                isCorrect[2] = false
            }
        }
        if (e.target == elementsInForm[1]) {
            if (el.value.length > 6) {
                if (haveMonkey == true) {
                    correct(el)
                    isCorrect[1] = true;
                }
                else {
                    for (i = 0; i < wrongCharsArray.length; i++) {
                        for (u = 0; u < el.value.length; u++) {
                            if (el.value[u] == wrongCharsArray[i]) {
                                incorrect(el)
                                isCorrect[1] = false
                            }
                            if (el.value[u] == '@') {
                                haveMonkey = true;
                            }
                        }
                    }
                }
            }
            else {
                incorrect(el)
            }
        }
        if (el.value.length == 0) {
            el.classList.remove('correct');
            el.classList.remove('incorrect');
        }
    })
}

document.querySelector('#send').addEventListener('click', () => {
    names = elementsInForm[0].value,
        mail = elementsInForm[1].value,
        message = elementsInForm[2].value,


        //variables which we want add to database
        params = new URLSearchParams({
            names: names,
            mail: mail,
            message: message
        })

    const myurl = `/sendMailToOwner/?${params}`

    if (isCorrect[0] == true && isCorrect[1] == true && isCorrect[2] == true) {
        alert('Your message has been sent! Thanks for contacting me!')
        document.querySelector('#send').setAttribute('href', myurl);
    }

})