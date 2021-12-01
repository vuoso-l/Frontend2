import { renderizarTareas } from "./taskRenderizarTarea.js";

const tareasTerminadas = document.querySelector(".tareas-terminadas");
let tokenJWT = localStorage.getItem("jwt");

const changeToUncompleted = (arrayTareas) => {
    tareasTerminadas.querySelectorAll(".fa-undo-alt").forEach(element => {
        element.addEventListener("click", (e) => {
            arrayTareas.forEach(tareaId => {
                if (e.target.id == tareaId.id) {
                    Swal.fire({
                        icon: 'question',
                        title: `¿Falta completar la actividad <-${tareaId.description}-> ?`,
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Pasar a tareas incompletas!'
                    })
                        .then((result) => {
                            if (result.isConfirmed) {
                                let info = {
                                    description: tareaId.description,
                                    completed: false,
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

export {changeToUncompleted};