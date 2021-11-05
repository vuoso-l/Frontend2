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
        .then((data) => {
            if (data.jwt) {
                alert("Usuario registrado correctamente");
                location.href = "./index.html";
            } else {
                alert("Usuario ya registrado!!")
            }
        })
}