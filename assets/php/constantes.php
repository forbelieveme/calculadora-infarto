<?php
ini_set('html_errors', false);
header('Content-Type: application/json');

if (!isset($resp)) {
    $resp = new stdClass();
}

$resp->cteDiabetesMujer = 0.69154;
$resp->cteDiabetesHombre = 0.57367;
$resp->cteMedicinaMujerTrue = 2.82263;
$resp->cteMedicinaHombreTrue = 1.99881;
$resp->cteMedicinaMujerFalse = 2.76157;
$resp->cteMedicinaHombreFalse = 1.93303;
$resp->cteCigarrilloMujer = 0.52873;
$resp->cteCigarrilloHombre = 0.65451;
$resp->cteEdadMujer = 2.32888;
$resp->cteEdadHombre = 3.06117;
$resp->cteColesterolMujer = 1.20904;
$resp->cteColesterolHombre = 1.1237;
$resp->cteHDLMujer = 0.70833;
$resp->cteHDLHombre = 0.93263;
$resp->cteFactorRiesgoMujer = 26.1931;
$resp->cteFactorRiesgoHombre = 23.9802;
$resp->cteRiesgoMujer = 0.95012;
$resp->cteRiesgoHombre = 0.88936;

echo json_encode($resp, JSON_FORCE_OBJECT);
