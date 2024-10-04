window.onload = function (e) {

    var btn1 = document.getElementById("btn1");
    var valor1 = documnet.getElementById("txt1");
    var valor2 = document.getElementById("txt2");


    btn1.onclick = function (e) {



        media(valor1, valor2);
    }

    function media(valor1, valor2) {
        // WARNING: For GET requests, body is set to null by browsers.

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44344/api/aula8/media?valor1=" + valor1 + "&valor2=" + valor2);

        xhr.send();
    }
}