const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const website = document.getElementById('website');
const password = document.getElementById('password');
const message = document.getElementById('message');
var control = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    control = 0;
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

    if (control == 0) {

        Swal.fire({
            title: 'Successful',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool',
            showConfirmButton: true,
            timer: 1500
        })
    }

    if (websiteValue === '') {
        setSuccessFor(website, 'example: https://www.example.com')
    } else if (!isWebsite(websiteValue)) {
        setErrorFor(website, 'Website invalid');
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

    control = 1;

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
    return /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/.test(website);
}

function isPassword(password) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}