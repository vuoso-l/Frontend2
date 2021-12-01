import { renderizarTareas } from "./taskRenderizarTarea.js";

const form = document.querySelector(".nueva-tarea");
let tokenJWT = localStorage.getItem("jwt");

const addToDo = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let info = {
            description: nuevaTarea.value,
            completed: false,
        }
        console.log(info);
        let settings = {
            method: "POST",
            body: JSON.stringify(info),
            headers: {
                authorization: tokenJWT,
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        let urlTareas = "https://ctd-todo-api.herokuapp.com/v1/tasks";
        fetch(urlTareas, settings)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                renderizarTareas();
            })

        form.reset();
    });
}

export {addToDo};