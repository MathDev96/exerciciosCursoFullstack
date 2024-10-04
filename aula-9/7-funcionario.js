window.onload = function (e) {

	var btn1 = document.getElementById("btn1");

	var nome = document.getElementById("txt1");
	var txt2 = document.getElementById("txt2");
	var txt3 = document.getElementById("txt3");
	var txt4 = document.getElementById("txt4");



	btn1.onclick = function (e) {

		calcular(nome, txt2, txt3, txt4);
	}

	function calcular(nome, txt2, txt3, txt4) {


		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;

		xhr.addEventListener("readystatechange", function () {
			if (this.readyState === 4) {
				console.log(this.responseText);
			}
		});

		xhr.open("GET", "https://localhost:44344/api/aula8/funcionario?nome=" + txt1 +"&valor1= " + txt2+ "&valor2=" + txt3 + "&valor3=" + txt4);

		xhr.send();
	}
}