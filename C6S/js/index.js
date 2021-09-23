// Obtenemos los elementos 'img'
const imagenes = document.querySelectorAll('img');
// const urlImagenes = [];

imagenes.forEach((item, index) => {
    let url = prompt(`Ingresá la URL de la imagen ${index +1}`);
    item.setAttribute('src', url);
    // urlImagenes.push(url);
});

// urlImagenes.forEach((url, index) => {
//     const nodoImagen = document.querySelector(`#imagen-${index+1}`);
//     nodoImagen.setAttribute('src', url);
// });

// Creamos un título de manera dinámica
var contenedor = document.querySelector('.pie');
var texto = document.createTextNode("Este es un texto creado dinamicamente con JS.");
var titulo = document.createElement("h1");
titulo.appendChild(texto);
contenedor.appendChild(titulo);