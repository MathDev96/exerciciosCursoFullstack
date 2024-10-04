window.onload = function (e) {

	var btn1 = document.getElementById("btn1");

	var txt1 = document.getElementById("txt1");
	var txt2 = document.getElementById("txt2");
	var txt3 = document.getElementById("txt3");


	btn1.onclick = function (e) {

		calcular(txt1, txt2, txt3);
	}

	function calcular(txt1, txt2, txt3) {
		

		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;

		xhr.addEventListener("readystatechange", function () {
			if (this.readyState === 4) {

				var mensagem = this.responseText;

				alert(mensagem);
			}
		});

		xhr.open("GET", "https://localhost:44344/api/aula8/troco?valor1= "+ txt1 + "&valor2= "+ txt2 + "&valor3= "+ txt3);

		xhr.send();
	}
}