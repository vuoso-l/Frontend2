const cerrarSesion = document.querySelector("#closeApp");

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

export {closeSesion};