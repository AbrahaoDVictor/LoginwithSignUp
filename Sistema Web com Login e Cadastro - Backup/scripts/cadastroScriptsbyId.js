function mostrarDados() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let profession = document.getElementById("profession")?.value || "Não informado";
    let team = document.getElementById("team").value || "Não informado";

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
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("team").value = "";

    
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "none"; 
    resultDiv.innerHTML = ""; 
}