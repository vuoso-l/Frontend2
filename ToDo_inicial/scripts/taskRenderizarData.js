const pUserName = document.querySelector(".user-info p");

const renderizarData = (data) => {
    pUserName.innerHTML = data.firstName + " " + data.lastName;
}

export {renderizarData};