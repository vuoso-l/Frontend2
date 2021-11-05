const nombre = document.querySelector("#name");
const apellido = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeatPassword");

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