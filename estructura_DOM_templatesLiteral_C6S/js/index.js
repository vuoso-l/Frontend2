// Obtengo los elementos
const contenedorSubt = document.querySelector(".contenedor-subt");
const tarjetas = document.querySelectorAll(".tarjeta");
const ancors = document.querySelectorAll("a");
const urlImagenes = [];

// Creamos un subtítulo de manera dinámica
let subTitulo = document.createTextNode("Este es un subtítulo creado dinamicamente con JS.");
let h2 = document.createElement("h2");
h2.appendChild(subTitulo);
contenedorSubt.appendChild(h2);

//Recorro los ancors para agregarles el href con su url
ancors.forEach((ancor, index) => {
    let url = prompt(`Ingresá la URL de la imagen ${index +1}`);
    ancor.setAttribute("href", url);
    urlImagenes.push(url);
});

urlImagenes.forEach((url, index) => {
    const nodoImagen = document.querySelector(`#imagen-${index+1}`);
    nodoImagen.setAttribute('src', url);
})

tarjetas.forEach((tarjeta, index) => {
    const nodoAncor = document.querySelector(`#tarjeta-${index+1}`);
    let ingresoSubt = prompt(`Ingresá un título para la imagen-${index+1}`);
    let subtTarjeta = document.createTextNode(ingresoSubt);
    let h3 = document.createElement("h3");
    h3.appendChild(subtTarjeta);
    nodoAncor.appendChild(h3);
})