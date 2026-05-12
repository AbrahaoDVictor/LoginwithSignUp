function mostrarDados() {
    let name = document.getElementsByName("name")[0].value;
    let age = document.getElementsByName("age")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let profession = document.getElementsByName("profession")[0]?.value || "Não informado";
    let team = document.getElementsByName("team")[0]?.value || "Não informado";

    if (name === "" || age === "" || email === "") {
        alert("Por favor, digite as informações nos campos de Nome, Idade e Email");
        return;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <strong>Dados do Cadastro:</strong><br/>
        <strong>Nome:</strong> ${name}<br/>
        <strong>Idade:</strong> ${age}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Profissão:</strong> ${profession}<br/>
        <strong>Time:</strong> ${team}<br/>
    `;
}

function limparDados() {
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName("age")[0].value = "";
    document.getElementsByName("email")[0].value = "";
    document.getElementsByName("profession")[0].value = "";
    document.getElementsByName("team")[0].value = "";

    
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "none"; 
    resultDiv.innerHTML = ""; 
}