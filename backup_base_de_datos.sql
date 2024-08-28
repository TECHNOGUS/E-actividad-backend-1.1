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

CREATE TABLE cursos (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  materiaId INT NOT NULL,
  PRIMARY KEY (id),
  KEY (materiaId),
  CONSTRAINT FOREIGN KEY (materiaId) REFERENCES materias (id) ON DELETE CASCADE
);

CREATE TABLE profesores (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE inscripciones (
  id INT NOT NULL AUTO_INCREMENT,
  estudianteId INT NOT NULL,
  cursoId INT NOT NULL,
  PRIMARY KEY (id),
  KEY (estudianteId),
  KEY (cursoId),
  CONSTRAINT FOREIGN KEY (estudianteId) REFERENCES estudiantes (id) ON DELETE CASCADE,
  CONSTRAINT FOREIGN KEY (cursoId) REFERENCES cursos (id) ON DELETE CASCADE
);

CREATE TABLE calificaciones (
  id INT NOT NULL AUTO_INCREMENT,
  estudianteId INT NOT NULL,
  cursoId INT NOT NULL,
  calificacion DECIMAL(4,2) NOT NULL,
  PRIMARY KEY (id),
  KEY (estudianteId),
  KEY (cursoId),
  CONSTRAINT FOREIGN KEY (estudianteId) REFERENCES estudiantes (id) ON DELETE CASCADE,
  CONSTRAINT FOREIGN KEY (cursoId) REFERENCES cursos (id) ON DELETE CASCADE
);

CREATE TABLE semestres (
  id INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(255) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  PRIMARY KEY (id)
);
