const body = document.querySelector("body");
const form = document.querySelector("form");

const mostrarSpinner = () => {

    // Spinner
    // Creación de los divs
    const spinnerContainer = document.createElement("div");
    const spinner = document.createElement("div");

    // Asignación de los IDs a cada nuevo elemento, para manipular sus estilos
    spinnerContainer.setAttribute("id", "contenedor-carga");
    spinner.setAttribute("id", "carga");

    // Ocultar el formulario de registro y Agregar el Spinner al HTML
    form.classList.add("hidden");
    spinnerContainer.appendChild(spinner);
    body.appendChild(spinnerContainer);

    return;
}

const ocultarSpinner = () => {
    // Selección del body para poder remover el spinner del HTML.
    const body = document.querySelector("body");

    // Selección del formulario para poder mostrarlo nuevamente
    const form = document.querySelector("form");

    // Selección del spinner
    const spinnerContainer = document.querySelector("#contenedor-carga");

    // Remover el spinner del HTML
    body.removeChild(spinnerContainer);

    // Quitar la clase que oculta el formulario
    form.classList.remove("hidden");

    return;
}

export {mostrarSpinner, ocultarSpinner};