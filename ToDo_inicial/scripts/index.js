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