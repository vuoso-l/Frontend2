const formulario = document.querySelector("form");
const nombre = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const terms = document.querySelector("#terms");
const ulCorrectData = document.querySelector(".correctData ul");
const ulError = document.querySelector(".errors ul");
let correctData = [];
let errors = [];

formulario.addEventListener("submit", (e) => {

    e.preventDefault();
    if (nameNotValid(nombre.value) || emailNotValid(email.value) || passNotValid(password.value) || termsNotValid(terms)) {
        showErrorMessages();
    }
    else {
        alert(`Estos son los datos de los campos completados -- nombre: ${nombre.value}, email: ${email.value} y password: ${password.value}`);
    }
});

const nameNotValid = (nombre) => {
    if (nombre === "" || (nombre && !/[a-z]+$/i.test(nombre.trim()))) {
        return errors.push(`El campo nombre es obligatorio y solo puede contener letras`);
    } else {
        console.log("estamos ok nombre");
    }
}

const emailNotValid = (email) => {
    if (email === "" || (email && !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email))) {
        return errors.push(`El campo email es obligatorio y debe tener formato de email. Por ejemplo: ejemplo@ejemplo.com`);
    } else {
        console.log("estamos ok email");
    }
}

const passNotValid = (password) => {
    if (password === "") {
        return errors.push(`El campo password es obligatorio y debe tener al menos 8 caracteres`);
    } else {
        console.log("estamos ok password");
    }
}

const termsNotValid = (terms) => {
    if (!terms.checked) {
        return errors.push(`El campo términos y condiciones de uso debe estar tildado para poder continuar`);
    } else {
        console.log("estamos ok checkk");
    }
}

const showErrorMessages = () => {
    if (errors.length > 0) {
        errors.forEach(error => {
            ulError.innerHTML += `<li>${error}</li>`;
        })
    }
}