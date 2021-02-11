var url = 'https://fpv-bcn.herokuapp.com/users';
var id = 1;
var nombre;
var mail;
var contra;

const load = response => {
    if(!response) return;
}

function handleSubmit() {
    nombre = document.getElementById("signin-username").value;
    contra = document.getElementById("signin-password").value;

    /* Intento de si no se rellenan los campos. si estan llenos alerta -> none y si no estan llenos display*/
    if (nombre === "" || contra === "") {
        document.getElementById("Alerta").className = "col-12 bg-danger";
        return false;
    } else {
        document.getElementById("Alerta").className = "col-12 bg-danger d-none";
    }
    return true;
}

function handleSubmit2() {
    nombre = document.getElementById("register-username").value;
    mail = document.getElementById("register-mail").value;
    contra = document.getElementById("register-password").value;

    /* Intento de si no se rellenan los campos. si estan llenos alerta -> none y si no estan llenos display*/
    if (nombre === "" || contra === "" || mail === "") {
        document.getElementById("Alerta").className = "col-12 bg-danger";
        return false;
    } else {
        document.getElementById("Alerta").className = "col-12 bg-danger d-none"; 
    }
    return true;
}

$(window).on("load",  async () => {
    try {
        info = (await axios.get(`${url}`)).data;
        console.log(info);
    } catch (error) {
        console.log(error)
    }

    $('#register').on("submit", event => {
        event.preventDefault();
        if(!handleSubmit2()) return;
        if (info.find(item => item.mail === mail) || info.find(item => item.username === nombre))  {
            $('#Alerta').text('User already exists');
            document.getElementById("Alerta").className = "col-12 bg-danger";
            return;
        } else { 
        var newid = 0
        var bool;
        while(bool) {
            newid = newid + 1;
            if (!(info.find(item => item.id === newid))) {
                bool = 0;
                newid = newid - 1;
            }
        }

        axios.post('https://fpv-bcn.herokuapp.com/users', {
            id : newid,
            username : nombre,
            email : mail,
            password : contra
        }).then(response => {
            console.log(response);
            alert("User created");
            window.open("login.html");
        }).catch(err => {
            console.log(err);
        })
    }
    });

    $('#login').on("submit", event => {
        event.preventDefault();
        if(!handleSubmit()) return;
        if(info.find(item => item.username === nombre) && info.find(item => item.password === contra))  {
            window.open("drone.html");
        } else {
            $('#Alerta').text('User does not exist / wrong password');
            document.getElementById("Alerta").className = "col-12 bg-danger";
            return;
        }
    });

});

function alertinfo(){
    $('#drone-alert').append(
        `<div class="alert alert-danger itemtoremove" role="alert">
        To see our drones register/login first!
        </div>
        <button id="delete" type="button" onclick="removeitem()" class="btn btn-success itemtoremove">Understood! Double click me to remove</button>
        `
    )
}

function removeitem(){
    $('#delete').on('click', () => {
        $('.itemtoremove').remove(); 
    });
}