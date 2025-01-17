function calcularRiesgoInfarto(
	edad,
	colesterol,
	presionSistolica,
	hdl,
	medicina,
	diabetes,
	cigarrillo,
	sexoBiologico
) {
	let constantes;
	$.ajax({
		url: 'assets/php/constantes.php',
		type: 'POST',
		async: false,
		success: function (datos) {
			constantes = datos;
		},
	});
	if (sexoBiologico) {
		let varDiabetes = () => {
			if (diabetes) return constantes.cteDiabetesMujer;
			else return 0;
		};
		let varCigarrillo = () => {
			if (cigarrillo) return constantes.cteCigarrilloMujer;
			else return 0;
		};
		let varMedicina = () => {
			if (medicina) return constantes.cteMedicinaMujerTrue;
			else return constantes.cteMedicinaMujerFalse;
		};

		let factorRiesgo =
			Math.log(edad) * constantes.cteEdadMujer +
			Math.log(colesterol) * constantes.cteColesterolMujer -
			Math.log(hdl) * constantes.cteHDLMujer +
			(Math.log(presionSistolica) * varMedicina() +
				varCigarrillo() +
				varDiabetes() -
				constantes.cteFactorRiesgoMujer);
		let riesgo =
			100 *
			(1 - Math.pow(constantes.cteRiesgoMujer, Math.pow(Math.E, factorRiesgo)));

		insertarResultado(
			edad,
			colesterol,
			presionSistolica,
			hdl,
			medicina,
			diabetes,
			cigarrillo,
			sexoBiologico,
			riesgo
		);
		return riesgo.toFixed(2);
	} else if (!sexoBiologico) {
		let varDiabetes = () => {
			if (diabetes) return constantes.cteDiabetesHombre;
			else return 0;
		};
		let varCigarrillo = () => {
			if (cigarrillo) return constantes.cteCigarrilloHombre;
			else return 0;
		};
		let varMedicina = () => {
			if (medicina) return constantes.cteMedicinaHombreTrue;
			else return constantes.cteMedicinaHombreFalse;
		};

		let factorRiesgo =
			Math.log(edad) * constantes.cteEdadHombre +
			Math.log(colesterol) * constantes.cteColesterolHombre -
			Math.log(hdl) * constantes.cteHDLHombre +
			(Math.log(presionSistolica) * varMedicina() +
				varCigarrillo() +
				varDiabetes() -
				constantes.cteFactorRiesgoHombre);
		let riesgo =
			100 *
			(1 -
				Math.pow(constantes.cteRiesgoHombre, Math.pow(Math.E, factorRiesgo)));
		insertarResultado(
			edad,
			colesterol,
			presionSistolica,
			hdl,
			medicina,
			diabetes,
			cigarrillo,
			sexoBiologico,
			riesgo
		);
		return riesgo.toFixed(2);
	}
}

function MostrarPantallaCierre() {
	$('.seccion-ini').hide();
	$('.seccion-cierre').show();
}

function insertarResultado(
	edad,
	colesterolTotal,
	tensionSistolica,
	hdl,
	medicina,
	diabetes,
	cigarrillo,
	sexoBiologico,
	riesgo
) {
	let boolSexoBiologico = () => (sexoBiologico == 'true' ? 'mujer' : 'hombre');
	let boolMedicina = () => (medicina == 'true' ? 'si' : 'no');
	let boolDiabetes = () => (diabetes == 'true' ? 'si' : 'no');
	let boolCigarrillo = () => (cigarrillo == 'true' ? 'si' : 'no');

	$.ajax({
		url: 'assets/php/resultados.php',
		type: 'POST',
		data: JSON.stringify({
			edad,
			colesterolTotal,
			tensionSistolica,
			hdl,
			medicina: boolMedicina(),
			diabetes: boolDiabetes(),
			cigarrillo: boolCigarrillo(),
			sexoBiologico: boolSexoBiologico(),
			resultado: riesgo,
		}),
		success: function (datos) {
			console.log('success', datos);
		},
		error: function (datos) {
			console.log('error', datos.responseText);
		},
	});
}
