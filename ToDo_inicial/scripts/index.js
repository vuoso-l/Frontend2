const formulario = document.querySelector(".formLogin");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailNotValid(email.value) || passNotValid(password.value)) {
        showErrorEmail();
        showErrorPass();
    }
    else {
        /* consumiendo la API y redirección a mis-tareas */
        loguinUserAndRedirectToMisTareas();
    }
});