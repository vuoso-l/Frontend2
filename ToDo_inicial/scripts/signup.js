const formulario = document.querySelector(".formRegister");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    mostrarSpinner();    

    if (nameNotValid(nombre.value) || lastnameNotValid(apellido.value) || emailNotValid(email.value) || passNotValid(password.value) || passwordCompare(repeatPassword.value)) {
        ocultarSpinner();
        showErrorName();
        showErrorLastname();
        showErrorEmail();
        showErrorPass();
        showErrorRePass();
    }
    else {
        /* Consumiento API, creación usuario y redirección a signin */
        ocultarSpinner();        
        createUserAndRedirectToSignin();
    }
});