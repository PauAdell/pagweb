function handleSubmit() {
    let nombre = document.getElementById("signin-username").value;
    let contra = document.getElementById("signin-password").value;

    /* Intento de si no se rellenan los campos. si estan llenos alerta -> none y si no estan llenos display*/
    if (nombre === "" || contra === "") {
        document.getElementById("Alerta").className = "col-12 bg-danger";
    } else {
        document.getElementById("Alerta").className = "col-12 bg-danger d-none";
        alert("You will recieve a confirmation mail soon") 
    }
    return false;
}

function handleSubmit2() {
    let nombre = document.getElementById("register-username").value;
    let mail = document.getElementById("register-mail").value;
    let contra = document.getElementById("register-password").value;

    /* Intento de si no se rellenan los campos. si estan llenos alerta -> none y si no estan llenos display*/
    if (nombre === "" || contra === "" || mail === "") {
        document.getElementById("Alerta").className = "col-12 bg-danger";
    } else {
        document.getElementById("Alerta").className = "col-12 bg-danger d-none";
        alert("Username - " + nombre + " Mail - " + mail + " Password - " + contra) 
    }
    return false;
}