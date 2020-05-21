<?php
ini_set('html_errors', false);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
class Database
{
    private $host = 'localhost';
    private $db_name = 'meccanim_calculadora_liga';
    private $username = 'meccanim_calcLig';
    private $password = 'calculadora2020';
    private $conn;

    public function connect()
    {

        $this->conn = null;

        // El '@' suprime el error que arroja la creación de la conexión
        // $this->conn = @new mysqli($this->host, $this->username, $this->password, $this->db_name);
        try {
            $this->conn = new mysqli($this->host, $this->username, $this->password, $this->db_name);
        } catch (Exception $e) {
            die(json_encode([
                'error' => mysqli_connect_error(),
                'code' => mysqli_connect_errno(),
                'excepcion' => $e->getMessage()
            ]));
        }

        return $this->conn;
    }
}
