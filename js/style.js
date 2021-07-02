const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const website = document.getElementById('website');
const password = document.getElementById('password');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get the values from the inputs

    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const websiteValue = website.value.trim();
    const passwordValue = password.value.trim();
    const messageValue = message.value.trim();


    if (nameValue === '') {
        //show error
        //add error class
        setErrorFor(fullname, 'cannot be blank');
    } else {
        //add success class

        setSuccessFor(fullname);
    }

    if (emailValue === '') {
        setErrorFor(email, 'cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'email is invalid');

    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error class
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}