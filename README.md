

# Sistema de Gestión de Estudiantes

Este proyecto es una aplicación básica de gestión de estudiantes utilizando Node.js y Express. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar la información de los estudiantes.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona este repositorio.
2. Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y define el puerto que utilizará el servidor:

   ```
   PORT=3000
   ```

## Uso

1. Inicia el servidor con el siguiente comando:

   ```bash
   npm run dev
   ```

2. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Estructura del Proyecto

- **index.js**: Archivo principal donde se configura el servidor y se definen las rutas.
- **/src/routes**: Contiene las rutas para gestionar estudiantes.
- **/src/views**: Contiene las plantillas EJS para renderizar las vistas.
- **/src/controllers**: Contiene la lógica de los controladores.
- **/src/models**: Contiene la estructura de los modelos de datos.

## Pruebas con Thunder Client

Para realizar pruebas en la API de este proyecto, puedes utilizar la extensión Thunder Client en Visual Studio Code. 

### Pasos para instalar Thunder Client:

1. Abre Visual Studio Code.
2. Ve a la pestaña de Extensiones (icono de cuadrado con cuatro partes).
3. Busca **Thunder Client** y haz clic en instalar.
4. Una vez instalado, puedes acceder a Thunder Client desde la barra lateral.

### Pruebas sugeridas:

1. **GET** `/estudiantes`: Obtén la lista de todos los estudiantes.
2. **POST** `/estudiantes`: Crea un nuevo estudiante enviando un cuerpo de solicitud con los datos `nombre`, `edad`, y `carrera`.
3. **PUT** `/estudiantes/:id`: Actualiza los datos de un estudiante existente.
4. **DELETE** `/estudiantes/:id`: Elimina un estudiante específico.

## Estudiante

**Nombre:** Gustavo Méndez  
**Carrera:** Ingeniería en Computación  
**Universidad:** Universidad Valle del Momboy
