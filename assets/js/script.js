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

							$('.txt-resultado').text(
								`Tu riesgo de sufrir de una enfermedad cardiovascular dentro de 10 años es de :`
							);

							$('.txt-descrip-res').text(`${resultado}%`);
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
