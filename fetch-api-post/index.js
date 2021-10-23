function enviarMensaje(evento) {
    console.log(evento.target.dataset);
    let info = {
        title: evento.target.dataset.titulo,
        userId: evento.target.dataset.idUsuario
    };

    let url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url, {
            method: "POST",
            body: JSON.stringify(info),
            header: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => {
            // console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log('Respuesta API:', data);
        });
}

let buttons = document.querySelectorAll('button');
buttons.forEach(element => {
    element.addEventListener('click', enviarMensaje);
});