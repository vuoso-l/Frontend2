const tarjeta = document.querySelector(".tarjeta");
const button = document.querySelector(".btnContainer");

// Aquí reapzamos un la consulta de la promesa, esperando su respuesta asíncrona
const callApi = () => {

    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos la respuesta
            renderizarDatosUsuario(data);
        });
}

function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    datos.results.forEach(element => {

        const container = document.createElement("div");
        const img = document.createElement("img");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        img.setAttribute("src", element.picture.medium);
        container.setAttribute("class", "container");
        p1.appendChild(document.createTextNode(`Nombre completo: ${element.name.first} ${element.name.last}`));
        p2.appendChild(document.createTextNode(`Email: ${element.email}`));
        container.appendChild(img);
        container.appendChild(p1);
        container.appendChild(p2);
        tarjeta.appendChild(container);

    });

}

/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utipzar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un cpck.
button.addEventListener("click", () => callApi());