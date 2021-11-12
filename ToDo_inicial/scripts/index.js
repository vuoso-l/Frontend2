import { mostrarSpinner, ocultarSpinner } from "./loader.js";
import { loguinUserAndRedirectToMisTareas } from "./apiIndex.js";
import { showErrorEmail, showErrorPass, emailNotValid, passNotValid } from "./showErros.js";

const formulario = document.querySelector(".formLogin");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    mostrarSpinner();
    
    if (emailNotValid(email.value) || passNotValid(password.value)) {
        ocultarSpinner();
        showErrorEmail();
        showErrorPass();
    }
    else {
        /* consumiendo la API y redirección a mis-tareas */
        ocultarSpinner();
        loguinUserAndRedirectToMisTareas();
    }
});