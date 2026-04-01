function cadastrar() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("password").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;
    let mensagem = document.getElementById("mensagem");

if (!nome) {
    mensagem.innerText = "Por Favor, digite seu nome.";
    mensagem.style.color = "#ff6b6b";
    return;
}

if (!email) {
     mensagem.innerText = "Por Favor, digite seu email.";
     mensagem.style.color = "#ff6b6b";
     return;
}

if (senha.length < 6) {
    mensagem.innerText = "A senha deve ter pelo menos 6 caracteres.";
    mensagem.style.color = "#ff6b6b";

}

   if (senha !== confirmarSenha) {
        mensagem.innerText   = "✗ As senhas não coincidem!";
        mensagem.style.color = "#ff6b6b";
        return;
    }


mensagem.innerText = "Conta criada com sucesso!";
mensagem.style.color = "#4cff91";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
}
 
function mostrarSenhas() {
    let senha    = document.getElementById("password");
    let confirmar = document.getElementById("confirmarSenha");
    let tipo     = senha.type === "password" ? "text" : "password";
    senha.type    = tipo;
    confirmar.type = tipo;
}



