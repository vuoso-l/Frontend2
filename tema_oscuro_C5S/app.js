let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let items = document.querySelectorAll(".item");
let h2 = document.querySelectorAll("h2");
let p = document.querySelectorAll("p");
let cambioTema = document.querySelector("#cambioTema");
let temaOscuro = document.querySelector(".switch input[type='checkbox']");

temaOscuro.addEventListener("click", () => {
    if (temaOscuro.style.display !== "none") {

        cambioTema.classList.toggle("cambiarTextoClaro");
        body.classList.toggle("temaOscuroFondo");
        h1.classList.toggle("temaOscuroH1");
        items.forEach(item => {
            item.classList.toggle("temaOscuroItem");
        })
        h2.forEach(subt => {
            subt.classList.toggle("temaOscuroH2");
        })
        p.forEach(texto => {
            texto.classList.toggle("temaOscuroP");
        })
    } else {
        temaOscuro.style.display = "none";
    }
})


