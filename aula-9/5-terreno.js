window.onload = function (e) {

    var btn1 = docuemnt.getElementById("btn1");

    var valor1 = document.getElementById("txt1");

    var valor2 = document.getElementById("txt2");

    var valor3 = document.getElementById("txt3");


    btn1.onclick = function (e) {

        calcular(valor1, valor2, valor3);
    }

    function calcular(valor1, valor2, valor3) {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var mensagem = this.responseText;

                alert (mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44344/api/aula8/terreno?valor1="+ valor1 + "&valor2="+ valor2 + "&valor3=" + valor3 );

        xhr.send();
    }

}