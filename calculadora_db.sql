CREATE DATABASE meccanim_calculadora_liga;

CREATE TABLE resultados (
    id_resultado INT NOT NULL AUTO_INCREMENT,
    sexo_biologico VARCHAR(10) NOT NULL ,
    diabetes VARCHAR(10) NOT NULL ,
    medicina VARCHAR(10) NOT NULL ,
    cigarrillo VARCHAR(10) NOT NULL ,
    colesterol_total FLOAT NOT NULL ,
    tension_sistolica FLOAT NOT NULL ,
    hdl FLOAT NOT NULL ,
    edad INT NOT NULL ,
    resultado FLOAT NOT NULL ,
    fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
PRIMARY KEY (`id_resultado`)) ENGINE = InnoDB;

-- INSERT INTO resultados (sexo_biologico, diabetes, medicina, cigarrillo, colesterol_total, tension_sistolica, hdl, edad, resultado)
-- VALUES (1, 1, 1, 1, 150, 100, 150, 45, 10);
