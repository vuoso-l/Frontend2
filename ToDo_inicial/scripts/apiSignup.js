/* Consumiendo la API */
const apiBaseUrl = "https://ctd-todo-api.herokuapp.com/v1/";
let apiUsers = "users";

const createUserAndRedirectToSignin = () => {
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
    fetch(apiBaseUrl + apiUsers, settings)
        .then((response) => {
            return response.json();
        })
        .catch(error => console.error('Error:', error))
        .then((data) => {
            if (data.jwt) {
                Swal.fire({
                    icon: 'success',
                    title: `Usuario registrado correctamente`,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Continuar a logIn!'
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            location.href = "./index.html";
                        }
                    })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: `El usuario ya se encuentra registrado!`,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ok!'
                });
            }
        })
}