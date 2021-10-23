let mail = document.querySelector('#inputEmail');
let pass = document.querySelector('#inputPassword');

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let validMail = isValidMail();
    let validPass = isValidPass();

    if (validMail && validPass) {
        location.href = "mis-tareas.html";
    } else {
        // registar el error
        console.log("Ingreso inválido");
        registerLoginAttempt(mail.value, pass.value);
    }
});

function isValidMail() {
    let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    return regex.test(mail.value);
}

function isValidPass() {
    return pass.value.length >= 8 && pass.value.length <= 12 &&
        pass.value.includes('.');
}

let button = document.querySelector('button');

mail.addEventListener('keyup', function() {
    console.log('keyup');
    enableButton();
});

pass.addEventListener('keyup', function() {
    enableButton();
});

function enableButton() {
    if (mail.value.length >= 6 && pass.value.length >= 6) {
        button.disabled = false;
        // button.removeAttribute('disabled');  
    }
}

let loginAttempts = [];

function registerLoginAttempt(user, pass) {
    let attempt = {
        userLogin: user,
        password: pass
    };

    loginAttempts.push(attempt);
}

function showLoginAttempts() {
    console.log(loginAttempts);
}

function showLoginAttemptsInJson() {
    console.log(JSON.stringify(loginAttempts));
}