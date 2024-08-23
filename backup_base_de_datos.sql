CREATE DATABASE actividad1;

USE actividad1;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('Admin', 'Editor') NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (username)
);

CREATE TABLE materias (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE estudiantes (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  edad INT NOT NULL,
  carreraId INT DEFAULT NULL,
  PRIMARY KEY (id),
  KEY (carreraId),
  CONSTRAINT FOREIGN KEY (carreraId) REFERENCES materias (id) ON DELETE SET NULL
);

INSERT INTO `materias` VALUES (1,'Ing en Computación'),(2,'Ing Industrial'),(3,'Contaduría Pública'),(4,'Administración De Empresas'),(5,'Derecho');