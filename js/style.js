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


    if (fullnameValue === '') {
        //show error
        //add error class
        setErrorFor(fullname, 'Please enter your name');
    } else {
        //add success class

        setSuccessFor(fullname, 'successful');
    }


    if (emailValue === '') {
        setErrorFor(email, 'Please enter your email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is invalid');
    } else {
        setSuccessFor(email, 'Successful');
    }


    if (phoneValue === '') {
        setErrorFor(phone, 'Please enter your phone number (example: 123 456 7890)');
    } else if (!isPhone(phoneValue)) {
        setErrorFor(phone, 'Phone is invalid');
    } else {
        setSuccessFor(phone, 'successful');
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Please enter your password');
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'Minimum eight characters, at least one letter and one number');
    } else {
        setSuccessFor(password, 'successful');
    }


    if (messageValue === '') {
        setErrorFor(message, 'Please enter your message');
    } else {
        setSuccessFor(message, 'successful')
    }

    if (!isWebsite(websiteValue)) {
        setErrorFor(website, 'example: https://www.example.com');
    }



}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
    small.style.visibility = "visible";

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control';
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
    small.style.visibility = "visible";

    small.innerText = message;

    //add success class
    formControl.className = 'form-control';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
    return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(phone);
}

function isWebsite(website) {
    return /^?(www\.)?[a-z0-9-]+\.(com|org)(\.[a-z]{2,3})?$/.test(website);
}

function isPassword(password) {
    return /^[a-z0-9-]+\.(?:com|org)(?:\.[a-z]{2,3})?$/.test(password);
}