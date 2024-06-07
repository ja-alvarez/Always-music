import pg from 'pg';
const { Pool } = pg;
const log = console.log;

const pool = new Pool({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    port: 5432,
    database: 'db_always_music',
    idleTimeoutMillis: 1000
});

// Add new student
const addStudent = async (studentName, rut, course, level) => {
    let request = {
        text: 'INSERT INTO students (studentName, rut, course, level) VALUES ($1, $2, $3, $4)',
        values: [studentName, rut, course, level]
    }
    let results = await pool.query(request);
    console.log('Student', studentName, 'successfully added.');
    pool.end;
};
// addStudent('Brian May', '12.345.678-9', 'guitarra', 7 );

// Query registered students
const getStudents = async () => {
    let request = {
        text: 'SELECT id, studentName, rut, course, level FROM students',
        values: []
    }
    let results = await pool.query(request);
    log('*******Get Students*******')
    log(results.rows);
    log('Number of records found: ' + results.rowCount);
    console.table(results.rows);
    log('*****************************************')
    pool.end();
};
//getStudents();

// Query student by rut
const getStudentByRut = async (rut) => {
    let request = {
        text: 'SELECT id, studentName, rut, course, level FROM students WHERE rut = $1',
        values: [rut]
    }
    let results = await pool.query(request);
    log('Number of records found: ' + results.rowCount)
    console.table(results.rows[0] || 'No students registered.');
    pool.end();
}
//getStudentByRut('12.345.678-9')

// Update student information.
const updateStudent = async (id, newStudentName, newRut, newCourse, newLevel) => {
    try {
        let request = {
            text: 'UPDATE students SET studentName = $1, rut = $2, course =$3, level = $4 WHERE id = $5',
            values: [newStudentName, newRut, newCourse, newLevel, id]
        };
        let results = await pool.query(request);
        log('Student', newStudentName, 'successfully edited.');
    } catch (error) {
        log('Error updating student.', error)
    }
    pool.end();
};

//updateStudent(2, 'Pedro', '111', 'piano', 5);

// Delete student record.
const deleteStudent = async (id) => {
    try {
        let getStudentRut = {
            text: 'SELECT rut FROM students WHERE id = $1',
            values: [id]
        }
        let rutResult = await pool.query(getStudentRut);
        let studentRut = rutResult.rows[0].rut;
        let request = {
            text: 'DELETE FROM students WHERE id = $1',
            values: [id]
        };
        await pool.query(request);
        log('Student record with rut', studentRut, 'deleted.');
    } catch (error) {
        log('Error deleting student.', error)
    }
};
//deleteStudent(2);

let commands = process.argv[2];

const operations = () => {
    switch (commands) {
        case 'add':
            let studentName = process.argv[3];
            let rut = process.argv[4];
            let course = process.argv[5];
            let level = process.argv[6];
            addStudent(studentName, rut, course, level);
            break;
        case 'getAll':
            getStudents()
            break;
        case 'getByRut':
            let rut2 = process.argv[3];
            getStudentByRut(rut2);
            break;
        case 'edit':
            let id = process.argv[3];
            let newStudentName = process.argv[4];
            let newRut = process.argv[5];
            let newCourse = process.argv[6];
            let newLevel = process.argv[7];
            updateStudent(id, newStudentName, newRut, newCourse, newLevel);
            break;
        case 'delete':
            let id2 = process.argv[3];
            deleteStudent(id2);
            break;
        default:
            log('Unrecognized command.')
            break;
    }
}

operations(commands);

/* EJEMPLOS DE USO DESDE LINEA DE COMANDO:
Agregar:
    node index.js add Jean 12.333.333-3 ingles 5
Consultar (todos los registros tabla): 
    node index.js getAll
Consultar estudiante por rut:
    node index.js getByRut 12.333.333-3
Editar:
    node index.js edit 15 'Jean Paul' 11.111.111-1 guitar 3
Eliminar: 
    node index.js delete 11
*/