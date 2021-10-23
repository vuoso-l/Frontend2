let horaInicial = Date.now();

setTimeout(() => {
    console.log("Saludo en 5 segundos");
    let horaFinal = Date.now();
    console.log(`El setTimeout se ejecuta por segunda vez después de ${horaFinal - horaInicial} milisegundos`);
}, 5000);

let contador = 1;
let cronometro = setInterval(() => {
    console.log(`Segundo ${contador}`);
    contador++;
}, 1000);

let detenedor = () => clearInterval(cronometro);
setInterval(detenedor, 10000);