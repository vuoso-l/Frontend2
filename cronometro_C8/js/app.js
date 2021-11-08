const numCrono = document.getElementById("number");
const btnStart = document.querySelector("#start");
const btnPause = document.querySelector("#pause");
const btnStop = document.querySelector("#stop");
const regPause = document.querySelector(".registerPause");
const regStop = document.querySelector(".registerStop");
let contador;
let n = 0;

playCrono = () => {
    contador = setInterval(() => {
        numCrono.innerHTML = n;
        n++;
    }, 1000);
    disableBtnPlay();
}

pauseCrono = () => {
    clearInterval(contador);
    enableBtnPlay();
    registerPause();    
}

stopCrono = () => {
    clearInterval(contador);
    numCrono.innerHTML = 0;
    enableBtnPlay();
    registerStop();    
}

const registerPause = () => {
    let ulPause = document.createElement("ul");
    let liPause = document.createElement("li");
    liPause.innerHTML = n - 1;
    ulPause.appendChild(liPause);
    regPause.appendChild(ulPause);
}

const registerStop = () => {
    let ulStop = document.createElement("ul");
    let liStop = document.createElement("li");
    liStop.innerHTML = n - 1;
    ulStop.appendChild(liStop);
    regStop.appendChild(ulStop);
    n = 0;
}

const disableBtnPlay = () => {
    btnStart.disabled = true;
    btnStart.classList.add("btnDisabled");
}

const enableBtnPlay = () => {
    btnStart.disabled = false;
    btnStart.classList.toggle("btnDisabled");
}

btnStart.addEventListener("click", playCrono);
btnStop.addEventListener("click", stopCrono);
btnPause.addEventListener("click", pauseCrono);

