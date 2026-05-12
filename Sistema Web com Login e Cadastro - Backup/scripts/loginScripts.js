function logon(event){
    event.preventDefault();

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "1234@"){
        window.location.href = "../cadastro.html";
    }
    else{
        alert("Usuário ou senha inválido");
    }
    return;
}