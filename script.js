


function login() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;
    let mensagem = document.getElementById("mensagem");

    let emailCorreto = "admin@gmail.com";
    let senhaCorreta = "1234";

    if (email === emailCorreto && senha === senhaCorreta) {
        mensagem.innerText = "Login realizado com sucesso!";
        mensagem.style.color = "green";
    } else {
        mensagem.innerText = "Email ou senha incorretos!";
        mensagem.style.color = "red";
    }
}

function mostrarSenha() {
    let campo = document.getElementById("password");
    campo.type = campo.type === "password" ? "text" : "password";
}

function esqueceuSenha() {
    document.getElementById("mensagemModal").innerText = "";
    document.getElementById("emailRecuperacao").value = "";
    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

function enviarRecuperacao() {
    let email = document.getElementById("emailRecuperacao").value;
    let msg = document.getElementById("mensagemModal");

    if (!email) {
        msg.innerText = "Por favor, digite seu email.";
        msg.style.color = "red";
        return;
    }

    // Simulação de envio (em produção, seria uma chamada ao servidor)
    msg.innerText = "Instruções enviadas para " + email + "!";
    msg.style.color = "green";

    setTimeout(() => {
        fecharModal();
    }, 2500);
}

// Fecha o modal ao clicar fora dele
document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target === this) fecharModal();
});