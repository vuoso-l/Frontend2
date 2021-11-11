const pUserName = document.querySelector(".user-info p");
const buttonSubmit = document.querySelector("#buttonTarea");
const form = document.querySelector(".nueva-tarea");
const nuevaTarea = document.querySelector("#nuevaTarea");
const tareasPendientes = document.querySelector(".tareas-pendientes");
const tareasTerminadas = document.querySelector(".tareas-terminadas");
const btnLi = document.querySelectorAll(".not-done");
const cerrarSesion = document.querySelector("#closeApp");

onload = () => {
    let tokenJWT = localStorage.getItem("jwt");

    const userName = () => {
        let settings = {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "authorization": tokenJWT,
            }
        }
        let url = "https://ctd-todo-api.herokuapp.com/v1/users/getMe";
        fetch(url, settings)
            .then((response) => {
                return response.json();
            })
            .catch(error => console.error('Error:', error))
            .then((data) => {
                renderizarData(data);
            })
    }

    const renderizarData = (data) => {
        pUserName.innerHTML = data.firstName + " " + data.lastName;
    }

    const renderizarTareas = () => {
        let settings = {
            method: "GET",
            headers: {
                "authorization": tokenJWT,
                "Content-type": "application/json; charset=UTF-8",
            }
        }
        let url = "https://ctd-todo-api.herokuapp.com/v1/tasks";
        fetch(url, settings)
            .then((response) => {
                return response.json();
            })
            .catch(error => console.error('Error:', error))
            .then((data) => {
                show(data);
            })
    }

    const addToDo = () => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let info = {
                description: nuevaTarea.value,
                completed: false,
            }
            console.log(info);
            let settings = {
                method: "POST",
                body: JSON.stringify(info),
                headers: {
                    authorization: tokenJWT,
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
            let urlTareas = "https://ctd-todo-api.herokuapp.com/v1/tasks";
            fetch(urlTareas, settings)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    renderizarTareas();
                })

            form.reset();
        });
    }

    const show = (arrayTareas) => {
        tareasPendientes.innerHTML = "";
        tareasTerminadas.innerHTML = "";
        arrayTareas.forEach(tarea => {
            if (tarea.completed === false) {
                tareasPendientes.innerHTML += `
                <li class="tarea">
                    <div class="not-done change" id="${tarea.id}"></div>
                    <div class="descripcion">
                        <p class="nombre">${tarea.description}</p>
                        <p class="timestamp"><i class="far
                        fa-calendar-alt"></i> ${tarea.createdAt}</p>
                    </div>
                </li>`
                changeToCompleted(arrayTareas);

            } else {
                tareasTerminadas.innerHTML += `
                <li class="tarea">
                    <div class="done"></div>
                    <div class="descripcion">
                        <p class="nombre">${tarea.description}</p>
                        <div>
                            <button><i id="${tarea.id}" class="fas fa-undo-alt change"></i></button>
                            <button><i id="${tarea.id}" class="far fa-trash-alt"></i></button>
                        </div>
                    </div>
                </li>`
                changeToUncompleted(arrayTareas);
                deleteTarea(arrayTareas);
            }
        });
    }

    const changeToCompleted = (arrayTareas) => {
        tareasPendientes.querySelectorAll(".tarea").forEach(element => {
            element.addEventListener("click", (e) => {
                arrayTareas.forEach(tareaId => {
                    if (e.target.id == tareaId.id) {
                        Swal.fire({
                            icon: 'question',
                            title: `¿La actividad <-${tareaId.description}-> está completa?`,
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Pasar a tareas completadas!'
                        })
                            .then((result) => {
                                if (result.isConfirmed) {
                                    let info = {
                                        description: tareaId.description,
                                        completed: true,
                                    }
                                    let settings = {
                                        method: "PUT",
                                        body: JSON.stringify(info),
                                        headers: {
                                            "authorization": tokenJWT,
                                            "Content-type": "application/json; charset=UTF-8",
                                        }
                                    }
                                    let url = `https://ctd-todo-api.herokuapp.com/v1/tasks/${tareaId.id}`;
                                    fetch(url, settings)
                                        .then((response) => {
                                            return response.json();
                                        })
                                        .catch(error => console.error('Error:', error))
                                        .then((data) => {
                                            console.log(data);
                                            renderizarTareas();
                                        })
                                }
                            })
                    }
                })
            })
        })

    }

    const changeToUncompleted = (arrayTareas) => {
        tareasTerminadas.querySelectorAll(".fa-undo-alt").forEach(element => {
            element.addEventListener("click", (e) => {
                arrayTareas.forEach(tareaId => {
                    if (e.target.id == tareaId.id) {
                        Swal.fire({
                            icon: 'question',
                            title: `¿Falta completar la actividad <-${tareaId.description}-> ?`,
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Pasar a tareas incompletas!'
                        })
                            .then((result) => {
                                if (result.isConfirmed) {
                                    let info = {
                                        description: tareaId.description,
                                        completed: false,
                                    }
                                    let settings = {
                                        method: "PUT",
                                        body: JSON.stringify(info),
                                        headers: {
                                            "authorization": tokenJWT,
                                            "Content-type": "application/json; charset=UTF-8",
                                        }
                                    }
                                    let url = `https://ctd-todo-api.herokuapp.com/v1/tasks/${tareaId.id}`;
                                    fetch(url, settings)
                                        .then((response) => {
                                            return response.json();
                                        })
                                        .catch(error => console.error('Error:', error))
                                        .then((data) => {
                                            console.log(data);
                                            renderizarTareas();
                                        })
                                }
                            })
                    }
                })
            })
        })
    }

    const deleteTarea = (arrayTareas) => {
        tareasTerminadas.querySelectorAll(".fa-trash-alt").forEach(element => {
            element.addEventListener("click", (e) => {
                arrayTareas.forEach(tarea => {
                    if (e.target.id == tarea.id) {
                        Swal.fire({
                            icon: 'question',
                            title: `¿Querés eliminar la actividad <-${tarea.description}-> ?`,
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Eliminar tarea!'
                        })
                            .then((result) => {
                                if (result.isConfirmed) {
                                    let settings = {
                                        method: "DELETE",
                                        headers: {
                                            "authorization": tokenJWT,
                                            "Content-type": "application/json; charset=UTF-8",
                                        }
                                    }
                                    let url = `https://ctd-todo-api.herokuapp.com/v1/tasks/${tarea.id}`;
                                    fetch(url, settings)
                                        .then((response) => {
                                            return response.json();
                                        })
                                        .catch(error => console.error('Error:', error))
                                        .then((data) => {
                                            console.log(data);
                                            renderizarTareas();
                                        })
                                }
                            })
                    }
                })
            })
        })
    }

    const closeSesion = () => {
        cerrarSesion.addEventListener("click", () => {
            Swal.fire({
                icon: 'question',
                title: `¿Querés cerrar la sesión?`,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Cerrar sesión!'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        localStorage.removeItem("jwt");
                        location.href = "./index.html";
                    }
                })
        })
    }

    userName();
    renderizarTareas();
    addToDo();
    closeSesion();
}