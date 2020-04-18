let edad = 70;
let colesterol = 210;
let presionSistolica = 140;
let hdl = 40;
// lipoproteínas de alta densidad (HDL)
let medicina = false;
let diabetes = false;
let cigarrillo = true;
let sexoBiologico = true;
// femenino = true masculino = false

let constantes = {
	cteDiabetesMujer: 0.69154,
	cteDiabetesHombre: 0.57367,
	cteMedicinaMujerTrue: 2.82263,
	cteMedicinaHombreTrue: 1.99881,
	cteMedicinaMujerFalse: 2.76157,
	cteMedicinaHombreFalse: 1.93303,
	cteCigarrilloMujer: 0.52873,
	cteCigarrilloHombre: 0.65451,
	cteEdadMujer: 2.32888,
	cteEdadHombre: 3.06117,
	cteColesterolMujer: 1.20904,
	cteColesterolHombre: 1.1237,
	cteHDLMujer: 0.70833,
	cteHDLHombre: 0.93263,
	cteFactorRiesgoMujer: 26.1931,
	cteFactorRiesgoHombre: 23.9802,
	cteRiesgoMujer: 0.95012,
	cteRiesgoHombre: 0.88936,
};

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
		return riesgo;
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
		return riesgo;
	}
}

console.log(
	`Resultado`,
	calcularRiesgoInfarto(
		edad,
		colesterol,
		presionSistolica,
		hdl,
		medicina,
		diabetes,
		cigarrillo,
		sexoBiologico
	).toFixed(2)
);
