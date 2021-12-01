import { renderizarData } from "./taskRenderizarData.js";
const pUserName = document.querySelector(".user-info p");
let tokenJWT = localStorage.getItem("jwt");

const userName = () => {
    let settings = {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "authorization": tokenJWT,
        }
    }
    let url = "https://ctd-todo-api.herokuapp.com/v1/users/getMe";
    fetch(url, settings)
        .then((response) => {
            return response.json();
        })
        .catch(error => console.error('Error:', error))
        .then((data) => {
            renderizarData(data);
        })
}

export { userName };