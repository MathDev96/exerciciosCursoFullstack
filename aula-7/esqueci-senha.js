window.onload = function (e) {

    var btnRecuperar = document.getElementById("btnRecuperar");

    var txtEmail = document.getElementById("txtEmail");

    txtEmail.focus();

    btnRecuperar.onclick = function (e) {

        e.preventDefault();

        var email = txtEmail.value;

        if (email == "") {

            exibirMensagemErro("Campo E-mail obrigatório.");

        }
        else {
            recuperarSenha(email);
        }
    };

    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);

    }

    function recuperarSenha (email) {
        alert("Email de recuperação enviado para " + email);
    }
}