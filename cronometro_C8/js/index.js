/* let i = 0;

function contador() {
    document.querySelector("p").innerHTML = i++
        console.log(i)
}

let button = document.querySelector("button");

button.addEventListener("click", () => {
    contador();
})
 */
/* button.onclick = () => {
    contador();
} */
let buttonPlayStop = document.querySelector("#pararArrancar");
let buttonReanudar = document.querySelector("#reanudar");
let contador;
let start = true;

let n = 0;
let l = document.getElementById("number");
iniciarContador = () => {
    contador = setInterval(() => {
        l.innerHTML = n;
        n++;
    }, 1000);
}

iniciarContador();

pararContador = () => {
    clearInterval(contador);
}

reiniciarContador = () => {
    n = 0;
    iniciarContador();
}

alternarBoton = () => {
    if (start) {
        pararContador();
        buttonPlayStop.innerText = "Borrar y comenzar";
        start = false;
        console.log("Se frenó");
    } else {
        reiniciarContador();
        buttonPlayStop.innerText = "Parar";
        start = true;
        console.log("En cero y retoma");
    }
}

reanudarBoton = () => {
    iniciarContador();
    console.log("Se reactivó");
}

buttonPlayStop.addEventListener("click", alternarBoton);
buttonReanudar.addEventListener("click", reanudarBoton);