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

/* Validaciones */
const nameNotValid = (nombre) => {
    if (nombre === "" || (nombre && !/[a-z]+$/i.test(nombre.trim()))) {
        return errorName.push(`El campo es obligatorio y solo puede contener letras`);

    }
}
const lastnameNotValid = (apellido) => {
    if (apellido === "" || (apellido && !/[a-z]+$/i.test(apellido.trim()))) {
        return errorLastname.push(`El campo es obligatorio y solo puede contener letras`);

    }
}
const emailNotValid = (email) => {
    if (email === "" || (email && !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email))) {
        return errorEmail.push(`El campo es obligatorio y debe tener formato de email. Por ejemplo: ejemplo@ejemplo.com`);

    }
}
const passNotValid = (password) => {
    if (password === "" || password.length < 8) {
        return errorPass.push(`El campo es obligatorio y debe tener al menos 8 caracteres`);

    }
}
const passwordCompare = (passToCompare) => {
    if (passToCompare !== password.value || passToCompare === "") {
        return errorRePass.push(`El campo es obligatorio y debe coincidir con la contraseña ingresada`);

    }
}

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

export {showErrorName, showErrorLastname, showErrorEmail, showErrorPass, showErrorRePass, nameNotValid, lastnameNotValid, emailNotValid, passNotValid, passwordCompare};