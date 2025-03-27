document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    let valido = true;

    const licenca = document.getElementById("licenca");
    const erroLicenca = document.getElementById("erroLicenca");
    if (!licenca.value) {
        erroLicenca.style.display = "block";
        valido = false;
    } else {
        erroLicenca.style.display = "none";
    }

    const idade = document.getElementById("idade");
    const erroIdade = document.getElementById("erroIdade");
    if (!idade.value || idade.value < 18) {
        erroIdade.style.display = "block";
        valido = false;
    } else {
        erroIdade.style.display = "none";
    }

    const fruta = document.getElementById("fruta");
    const erroFruta = document.getElementById("erroFruta");
    if (!fruta.value) {
        erroFruta.style.display = "block";
        valido = false;
    } else {
        erroFruta.style.display = "none";
    }

    const email = document.getElementById("email");
    const erroEmail = document.getElementById("erroEmail");
    if (!email.checkValidity()) {
        erroEmail.style.display = "block";
        valido = false;
    } else {
        erroEmail.style.display = "none";
    }

    const mensagem = document.getElementById("mensagem");
    const erroMensagem = document.getElementById("erroMensagem");
    if (!mensagem.value) {
        erroMensagem.style.display = "block";
        valido = false;
    } else {
        erroMensagem.style.display = "none";
    }

    if (!valido) {
        event.preventDefault();
    }
});