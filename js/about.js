let aboutName = document.querySelector('.about__name')
let aboutLastName = document.querySelector('.about__lastName')
let aboutEmail = document.querySelector('.about__email')
let aboutSubject = document.querySelector('.about__subject');
let aboutBtn = document.querySelector('.about__social-btn')
let aboutMessage = document.querySelector('.about__social-textarea-message')

aboutBtn.addEventListener('click', () => {
    for (i = 0; i < aboutName.value.length; i++) {
        if (aboutName.value.length >= 15  && aboutName.value.length < 1) {
            console.log('meca')
            let error = document.querySelector('.error')

            error.innerHTML = `<div>The name must not exceed 15 characters.</div>`

            aboutName.addEventListener('change', () => {
                if (aboutName.value.length < 15) {
                    console.log('po ra')
                    let error = document.querySelector('.error')

                    error.innerHTML = ``
                } else {
                    console.log('meca')
                }
            })
        }

        if(aboutLastName.value.length <  1 || aboutSubject.value.length <  1 || aboutEmail.value.length <  1) {
            let error = document.querySelector('.error')
            error.innerHTML = `<div>The Lastname must not be less than 5 characters.</div>`

            aboutLastName.addEventListener('change', () => {
                if (aboutName.value.length < 1) {
                    let error = document.querySelector('.error')

                    error.innerHTML = ``
                } else {
                    console.log('meca')
                    error.style.display = "none"
                }
            })
        }
    }

    aboutName.value = '';
    aboutLastName.value = '';
    aboutEmail.value = '';
    aboutSubject.value = '';
    aboutMessage.value = '';
})