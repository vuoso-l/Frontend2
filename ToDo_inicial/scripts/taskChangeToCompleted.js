import { renderizarTareas } from "./taskRenderizarTarea.js";

const tareasPendientes = document.querySelector(".tareas-pendientes");
let tokenJWT = localStorage.getItem("jwt");

const changeToCompleted = (arrayTareas) => {
    tareasPendientes.querySelectorAll(".tarea").forEach(element => {
        element.addEventListener("click", (e) => {
            arrayTareas.forEach(tareaId => {
                if (e.target.id == tareaId.id) {
                    Swal.fire({
                        icon: 'question',
                        title: `¿La actividad <-${tareaId.description}-> está completa?`,
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Pasar a tareas completadas!'
                    })
                        .then((result) => {
                            if (result.isConfirmed) {
                                let info = {
                                    description: tareaId.description,
                                    completed: true,
                                }
                                let settings = {
                                    method: "PUT",
                                    body: JSON.stringify(info),
                                    headers: {
                                        "authorization": tokenJWT,
                                        "Content-type": "application/json; charset=UTF-8",
                                    }
                                }
                                let url = `https://ctd-todo-api.herokuapp.com/v1/tasks/${tareaId.id}`;
                                fetch(url, settings)
                                    .then((response) => {
                                        return response.json();
                                    })
                                    .catch(error => console.error('Error:', error))
                                    .then((data) => {
                                        console.log(data);
                                        renderizarTareas();
                                    })
                            }
                        })
                }
            })
        })
    })
}

export {changeToCompleted};