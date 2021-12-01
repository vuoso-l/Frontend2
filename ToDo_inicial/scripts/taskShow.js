import { changeToCompleted } from "./taskChangeToCompleted.js";
import { changeToUncompleted } from "./taskChangeToUncompleted.js";
import { deleteTarea } from "./taskDeleteTarea.js";

const tareasPendientes = document.querySelector(".tareas-pendientes");
const tareasTerminadas = document.querySelector(".tareas-terminadas");

const show = (arrayTareas) => {
    tareasPendientes.innerHTML = "";
    tareasTerminadas.innerHTML = "";
    arrayTareas.forEach(tarea => {
        if (tarea.completed === false) {
            tareasPendientes.innerHTML += `
            <li class="tarea">
                <div class="not-done change" id="${tarea.id}"></div>
                <div class="descripcion">
                    <p class="nombre">${tarea.description}</p>
                    <p class="timestamp"><i class="far
                    fa-calendar-alt"></i> ${tarea.createdAt}</p>
                </div>
            </li>`
            changeToCompleted(arrayTareas);

        } else {
            tareasTerminadas.innerHTML += `
            <li class="tarea">
                <div class="done"></div>
                <div class="descripcion">
                    <p class="nombre">${tarea.description}</p>
                    <div>
                        <button><i id="${tarea.id}" class="fas fa-undo-alt change"></i></button>
                        <button><i id="${tarea.id}" class="far fa-trash-alt"></i></button>
                    </div>
                </div>
            </li>`
            changeToUncompleted(arrayTareas);
            deleteTarea(arrayTareas);
        }
    });
}

export {show};