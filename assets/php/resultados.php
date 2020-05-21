<?php
//Headers
header('Content-Type: application/json');

include_once "connect.php";

$database = new Database();
$db = $database->connect();
mysqli_set_charset($db, "utf8");

if (!isset($resp)) {
    $resp = new stdClass();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $json = file_get_contents("php://input");

    $data = json_decode($json);

    $sexoBiologico = ($data->{"sexoBiologico"});
    $diabetes = ($data->{"diabetes"});
    $medicina = ($data->{"medicina"});
    $cigarrillo = ($data->{"cigarrillo"});
    $colesterolTotal = ($data->{"colesterolTotal"});
    $tensionSistolica = ($data->{"tensionSistolica"});
    $hdl = ($data->{"hdl"});
    $edad = ($data->{"edad"});
    $resultado = ($data->{"resultado"});

    $sql = "INSERT INTO resultados (sexo_biologico, diabetes, medicina, cigarrillo, colesterol_total, tension_sistolica, hdl, edad, resultado)
    VALUES ('$sexoBiologico', '$diabetes', '$medicina', '$cigarrillo', $colesterolTotal, $tensionSistolica, $hdl, $edad, $resultado);";

    try {
        $result = mysqli_query($db, $sql);
    } catch (Exception $e) {
        die(json_encode([
            'error' => mysqli_connect_error(),
            'code' => mysqli_connect_errno(),
            'excepcion' => $e->getMessage()
        ]));
    }

    $resp->mensaje = 'Consulta exitosa';

    echo json_encode($resp, JSON_FORCE_OBJECT);

    mysqli_close($db);
}
