const ulName = document.querySelector("#nameError");
const ulLastname = document.querySelector("#lastnameError");
const ulEmail = document.querySelector("#emailError");
const ulPass = document.querySelector("#passError");
const ulRePass = document.querySelector("#rePassError");
let li = document.createElement("li");
let errorName = [];
let errorLastname = [];
let errorEmail = [];
let errorPass = [];
let errorRePass = [];

/* Funciones para mostrar errores debajo de los inputs ul */
const showErrorName = () => {
    if (errorName.length > 0) {
        errorName.forEach(error => {
            li.innerHTML = "";
            li.classList.add("showErrors");
            li.appendChild(document.createTextNode(error));
            ulName.appendChild(li);
            errorName.splice(0);
        })
    }
}
const showErrorLastname = () => {
    if (errorLastname.length > 0) {
        errorLastname.forEach(error => {
            li.innerHTML = "";
            li.classList.add("showErrors");
            li.appendChild(document.createTextNode(error));
            ulLastname.appendChild(li);
            errorLastname.splice(0);
        })
    }
}
const showErrorEmail = () => {
    if (errorEmail.length > 0) {
        errorEmail.forEach(error => {
            li.innerHTML = "";
            li.classList.add("showErrors");
            li.appendChild(document.createTextNode(error));
            ulEmail.appendChild(li);
            errorEmail.splice(0);
        })
    }
}
const showErrorPass = () => {
    if (errorPass.length > 0) {
        errorPass.forEach(error => {
            li.innerHTML = "";
            li.classList.add("showErrors");
            li.appendChild(document.createTextNode(error));
            ulPass.appendChild(li);
            errorPass.splice(0);
        })
    }
}
const showErrorRePass = () => {
    if (errorRePass.length > 0) {
        errorRePass.forEach(error => {
            li.innerHTML = "";
            li.classList.add("showErrors");
            li.appendChild(document.createTextNode(error));
            ulRePass.appendChild(li);
            errorRePass.splice(0);
        })
    }
}