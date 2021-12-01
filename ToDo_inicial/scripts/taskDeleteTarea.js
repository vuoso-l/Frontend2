import { renderizarTareas } from "./taskRenderizarTarea.js";

const tareasTerminadas = document.querySelector(".tareas-terminadas");
let tokenJWT = localStorage.getItem("jwt");

const deleteTarea = (arrayTareas) => {
    tareasTerminadas.querySelectorAll(".fa-trash-alt").forEach(element => {
        element.addEventListener("click", (e) => {
            arrayTareas.forEach(tarea => {
                if (e.target.id == tarea.id) {
                    Swal.fire({
                        icon: 'question',
                        title: `¿Querés eliminar la actividad <-${tarea.description}-> ?`,
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Eliminar tarea!'
                    })
                        .then((result) => {
                            if (result.isConfirmed) {
                                let settings = {
                                    method: "DELETE",
                                    headers: {
                                        "authorization": tokenJWT,
                                        "Content-type": "application/json; charset=UTF-8",
                                    }
                                }
                                let url = `https://ctd-todo-api.herokuapp.com/v1/tasks/${tarea.id}`;
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

export {deleteTarea};