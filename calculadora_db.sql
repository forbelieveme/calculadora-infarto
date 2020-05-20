CREATE DATABASE calculadora_liga;

USE calculadora_liga;

CREATE TABLE resultados (
    id_resultado INT NOT NULL AUTO_INCREMENT,
    sexo_biologico BOOLEAN NOT NULL ,
    diabetes BOOLEAN NOT NULL ,
    medicina BOOLEAN NOT NULL ,
    cigarrillo BOOLEAN NOT NULL ,
    colesterol_total INT NOT NULL ,
    tension_sistolica INT NOT NULL ,
    hdl INT NOT NULL ,
    edad INT NOT NULL ,
    resultado INT NOT NULL ,
    fecha DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,
PRIMARY KEY (`id_resultado`)) ENGINE = InnoDB;

-- INSERT INTO resultados (sexo_biologico, diabetes, medicina, cigarrillo, colesterol_total, tension_sistolica, hdl, edad, resultado)
-- VALUES (1, 1, 1, 1, 150, 100, 150, 45, 10);
