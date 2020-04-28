// Example starter JavaScript for disabling form submissions if there are invalid fields

(function () {
	'use strict';

	let form = {};

	var formulario = document.getElementById('formulario');

	function obtenerDatos() {
		for (let i = 0; i < formulario.length - 1; i++) {
			if (formulario.elements[i].checked) {
				form[`"${formulario.elements[i].name}"`] = formulario.elements[i].value;
				continue;
			}
			if (formulario.elements[i].type == 'number') {
				form[`"${formulario.elements[i].name}"`] = formulario.elements[i].value;
			}
		}
		console.log(`sucess`, form);
	}

	window.addEventListener(
		'load',
		function () {
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			var forms = document.getElementsByClassName('needs-validation');

			// Loop over them and prevent submission
			var validation = Array.prototype.filter.call(forms, function (form) {
				form.addEventListener(
					'submit',
					function (event) {
						if (form.checkValidity() === false) {
							event.preventDefault();
							event.stopPropagation();
						} else {
							obtenerDatos();
							let resultado = calcularRiesgoInfarto(
								form.edad.value,
								form.colesterol.value,
								form.presionSistolica.value,
								form.hdl.value,
								form.medicina.value,
								form.diabetes.value,
								form.cigarrillo.value,
								form.sexoBiologico.value
							);

							$('.txt-resultado').text('Nivel ' + resultado);
							var textoResultado = '';
							switch (1) {
								case 1:
									textoResultado = '¡Tu riesgo es bajo!';
									break;
								case 2:
									textoResultado = '¡Tu riesgo es medio!';
									break;
								case 3:
									textoResultado = '¡Tu riesgo es alto!';
									break;
								case 4:
									textoResultado = '¡Tu riesgo es crítico!';
									break;
								default:
									console.log('Error en resultado: ' + resultado);
									return;
							}

							$('.txt-descrip-res').text(textoResultado);
							MostrarPantallaCierre();
						}
						form.classList.add('was-validated');
					},
					false
				);
			});
		},
		false
	);
})();
