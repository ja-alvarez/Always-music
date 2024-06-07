# Always Music School Management System

## Descripción del Proyecto (Español)

La escuela de música Always Music es reconocida por graduar a grandes músicos de reconocimiento mundial. Este proyecto consiste en una aplicación desarrollada en Node.js que permite gestionar los registros de estudiantes utilizando una base de datos PostgreSQL.

### Funcionalidades

- **Agregar un nuevo estudiante:** Permite registrar un nuevo estudiante en la base de datos.
- **Consultar todos los estudiantes registrados:** Obtén una lista completa de todos los estudiantes registrados.
- **Consultar estudiante por RUT:** Permite buscar la información de un estudiante específico utilizando su RUT.
- **Actualizar la información de un estudiante:** Actualiza los datos de un estudiante existente.
- **Eliminar el registro de un estudiante:** Elimina el registro de un estudiante de la base de datos.

### Requisitos

- Node.js
- PostgreSQL

### Instalación y Configuración

1. Clona este repositorio:
    ```bash
    git clone https://github.com/tu-usuario/always-music.git
    cd always-music
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura la base de datos PostgreSQL y crea una tabla con las siguientes columnas:
    ```sql
    CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        studentName VARCHAR(50),
        rut VARCHAR(12),
        course VARCHAR(50),
        level INTEGER
    );
    ```

4. Configura la conexión a la base de datos en el archivo `index.js`.

### Uso

Ejecuta los siguientes comandos desde la línea de comandos para interactuar con la aplicación:

- **Agregar un estudiante:**
    ```bash
    node index.js add "Nombre del Estudiante" "RUT" "Curso" "Nivel"
    ```

- **Consultar todos los estudiantes:**
    ```bash
    node index.js getAll
    ```

- **Consultar estudiante por RUT:**
    ```bash
    node index.js getByRut "RUT"
    ```

- **Actualizar información de un estudiante:**
    ```bash
    node index.js edit "ID" "Nuevo Nombre" "Nuevo RUT" "Nuevo Curso" "Nuevo Nivel"
    ```

- **Eliminar un estudiante:**
    ```bash
    node index.js delete "ID"
    ```

## Project Description (English)

Always Music School is renowned for graduating world-renowned musicians. This project consists of an application developed in Node.js that allows managing student records using a PostgreSQL database.

### Features

- **Add a new student:** Allows registering a new student in the database.
- **Retrieve all registered students:** Get a complete list of all registered students.
- **Retrieve student by RUT:** Allows searching for a specific student's information using their RUT.
- **Update student information:** Update an existing student's data.
- **Delete a student record:** Delete a student record from the database.

### Requirements

- Node.js
- PostgreSQL

### Installation and Configuration

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/always-music.git
    cd always-music
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up the PostgreSQL database and create a table with the following columns:
    ```sql
    CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        studentName VARCHAR(50),
        rut VARCHAR(12),
        course VARCHAR(50),
        level INTEGER
    );
    ```

4. Configure the database connection in the `index.js` file.

### Usage

Run the following commands from the command line to interact with the application:

- **Add a student:**
    ```bash
    node index.js add "Student Name" "RUT" "Course" "Level"
    ```

- **Retrieve all students:**
    ```bash
    node index.js getAll
    ```

- **Retrieve student by RUT:**
    ```bash
    node index.js getByRut "RUT"
    ```

- **Update student information:**
    ```bash
    node index.js edit "ID" "New Name" "New RUT" "New Course" "New Level"
    ```

- **Delete a student:**
    ```bash
    node index.js delete "ID"
    ```

## License

This project is licensed under the MIT License.