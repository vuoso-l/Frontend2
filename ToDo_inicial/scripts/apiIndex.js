/* Consumiendo la API */
const apiBaseUrl = "https://ctd-todo-api.herokuapp.com/v1/";
let apiUsersLogin = "users/login";

const loguinUserAndRedirectToMisTareas = () => {
    let info = {
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
    fetch(apiBaseUrl + apiUsersLogin, settings)
        .then((response) => {
            return response.json();
        })
        .catch(error => console.error('Error:', error))
        .then((data) => {
            if (data.jwt) {
                localStorage.setItem("jwt", data.jwt)
                alert("Usuario logueado correctamente");
                location.href = "./mis-tareas.html";
            } else {
                alert("No existe el usuario!!");
            }
        })
}