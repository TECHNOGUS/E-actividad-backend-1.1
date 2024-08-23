# Configuración del Proyecto

## Requisitos Previos
- Node.js y npm instalados
- Base de Datos MySQL configurada

## Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TECHNOGUS/E-actividad-backend-1.1

2. Instalar las dependencias del proyecto

cd tu-repositorio
npm install

3. Configurar las variables de entorno 
Crea un archivo .env en la raíz del proyecto y asegúrate de incluir las siguientes variables:

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=actividad1

4. Ejecutar las migraciones de base de datos
Para aplicar las migraciones y crear las tablas necesarias en la base de datos, ejecuta el siguiente comando:

npx sequelize-cli db:migrate

5. Inica el servidor 
Ejecuta el siguiente comando para iniciar el servidor:

node index.js

6. Acceder a la aplicación
Abre tu navegador y ve a http://localhost:3000 para acceder a la aplicación.


## Migraciones de base de datos
# Para aplicar las migraciones y configurar la base de datos, ejecuta el siguiente comando:

   npx sequelize-cli db:migrate
 
 Este comando creará las tablas necesarias en la base de datos configurada en el archivo .env.
