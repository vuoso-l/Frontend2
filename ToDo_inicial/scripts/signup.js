import { mostrarSpinner, ocultarSpinner } from "./loader.js";
import { createUserAndRedirectToSignin } from "./apiSignup.js";
import * as showErros from "./showErros.js";

const formulario = document.querySelector(".formRegister");
const nombre = document.querySelector("#name");
const apellido = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeatPassword");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    mostrarSpinner();    
    if (showErros.nameNotValid(nombre.value) || showErros.lastnameNotValid(apellido.value) || showErros.emailNotValid(email.value) || showErros.passNotValid(password.value) || showErros.passwordCompare(repeatPassword.value)) {
        ocultarSpinner();
        showErros.showErrorName();
        showErros.showErrorLastname();
        showErros.showErrorEmail();
        showErros.showErrorPass();
        showErros.showErrorRePass();
    }
    else {
        /* Consumiento API, creación usuario y redirección a signin */
        ocultarSpinner();        
        createUserAndRedirectToSignin();
    }
});