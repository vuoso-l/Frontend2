import { show } from "./taskShow.js";
let tokenJWT = localStorage.getItem("jwt");

const renderizarTareas = () => {
    let settings = {
        method: "GET",
        headers: {
            "authorization": tokenJWT,
            "Content-type": "application/json; charset=UTF-8",
        }
    }
    let url = "https://ctd-todo-api.herokuapp.com/v1/tasks";
    fetch(url, settings)
        .then((response) => {
            return response.json();
        })
        .catch(error => console.error('Error:', error))
        .then((data) => {
            console.log(data);
            show(data);
        })
}

export { renderizarTareas };