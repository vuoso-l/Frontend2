import { userName } from "./taskUserName.js";
import { renderizarTareas } from "./taskRenderizarTarea.js";
import { closeSesion } from "./taskCloseSesion.js";
import { addToDo } from "./taskAddToDo.js";

const buttonSubmit = document.querySelector("#buttonTarea");
const nuevaTarea = document.querySelector("#nuevaTarea");
const btnLi = document.querySelectorAll(".not-done");

onload = () => {    

    userName();
    renderizarTareas();
    addToDo();
    closeSesion();
}