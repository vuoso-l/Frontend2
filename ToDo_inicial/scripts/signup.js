const formulario = document.querySelector(".formRegister");
const nombre = document.querySelector("#name");
const apellido = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeatPassword");
const ulName = document.querySelector("#nameError");
const ulLastname = document.querySelector("#lastnameError");
const ulEmail = document.querySelector("#emailError");
const ulPass = document.querySelector("#passError");
const ulRePass = document.querySelector("#rePassError");
let errorName = [];
let errorLastname = [];
let errorEmail = [];
let errorPass = [];
let errorRePass = [];
let registerAttempts = [];

formulario.addEventListener("click", (e) => {
    e.preventDefault();
    if (nameNotValid(nombre.value) || lastnameNotValid(apellido.value) || emailNotValid(email.value) || passNotValid(password.value) || passwordCompare(repeatPassword.value)) {
        showErrorName();
        showErrorLastname();
        showErrorEmail();
        showErrorPass();
        showErrorRePass();
    }
    else {
        createUser();
        registerAttempt(nombre.value, apellido.value, email.value, password.value);
    }
});

/* Consumiendo la API */
let info = {
    firstName: nombre.value,
    lastName: apellido.value,
    email: email.value,
    password: password.value
}
let settings = {
    method: "POST",
    body: JSON.stringify(info),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}
let url = "https://ctd-todo-api.herokuapp.com/v1/users";
const createUser = () => {
    fetch(url, settings)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
}

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
    if (password === "") {
        return errorPass.push(`El campo es obligatorio y debe tener al menos 8 caracteres`);

    }
}
const passwordCompare = (passToCompare) => {
    if (passToCompare !== password.value || passToCompare === "") {
        return errorRePass.push(`El campo es obligatorio y debe coincidir con la contraseña ingresada`);

    }
}

/* Funciones para mostrar errores debajo de los inputs */
let li = document.createElement("li");
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

/* Guardar datos del registro */
const registerAttempt = (nombre, apellido, email, password) => {
    let attempt = {
        nombreUser: nombre,
        apellidoUser: apellido,
        emailUser: email,
        passwordUser: password,
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    };

    registerAttempts.push(attempt);
}