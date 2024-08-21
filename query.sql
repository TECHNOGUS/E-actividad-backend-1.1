-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS actividad1;
USE actividad1;

-- Crear la tabla de Materias
CREATE TABLE IF NOT EXISTS materias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

-- Insertar materias en la tabla de Materias
INSERT INTO materias (nombre) VALUES
('Ing en Computación'),
('Ing Industrial'),
('Contaduría Pública'),
('Administración De Empresas'),
('Derecho');

-- Crear la tabla de Estudiantes
CREATE TABLE IF NOT EXISTS estudiantes (
   id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    edad INT NOT NULL,
    carreraId INT,
    FOREIGN KEY (carreraId) REFERENCES materias(id) ON DELETE SET NULL
);
