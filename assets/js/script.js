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
		// console.log(`sucess`, form);
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

							if (resultado < 10) {
								// // Tu riesgo de sufrir una enfermedad cardiovascular  en los próximos 10 años es Baja. Sin embargo, te recomendamos hacer ejercicio, 30 minutos, 3 veces por semana; llevar una dieta saludable, rica en frutas y verduras, bajo consumo de sal y de alcohol.
								$('.txt-resultado').html(
									`Tu riesgo de sufrir una enfermedad cardiovascular en los próximos 
									10 años es <b>Baja</b>. Sin embargo, te recomendamos hacer ejercicio, 
									30 minutos, 3 veces por semana; llevar una dieta saludable, rica 
									en frutas y verduras, bajo consumo de sal y de alcohol.`
								);
							} else if (resultado >= 10 && resultado <= 20) {
								$('.txt-resultado').html(
									`Tu riesgo de sufrir una enfermedad cardiovascular en los próximos
									10 años es <b>Medio</b>. Sin embargo, te recomendamos hacer ejercicio, 
									30 minutos, 3 veces por semana; llevar una dieta saludable, rica 
									en frutas y verduras, bajo consumo de sal y de alcohol.`
								);
							} else if (resultado > 20) {
								$('.txt-resultado').html(
									`Tu riesgo de sufrir una enfermedad cardiovascular en los próximos 
									10 años es <b>Alto</b>. Sin embargo, te recomendamos hacer ejercicio, 
									30 minutos, 3 veces por semana; llevar una dieta saludable, rica 
									en frutas y verduras, bajo consumo de sal y de alcohol.`
								);
							}

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
