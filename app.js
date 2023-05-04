///Declaration of variables y/o constantes
let user;
let password;
let i;
let tope;
let student_name;
let note;
const students = [];

//Methods
const saveStudentIntoDB = function(student) {
    console.log(student);
    students.push(student);
    alert('¡Estudiante guardado!');
}

const showAllStudents = () => {
    for (let i = 0; i < students.length; i++) {
        alert('Nombre del estudiante: ' + students[i].name + ', nota: ' + students[i].note);
    }
}

const showErrorMsg = () => {
    alert('¡No existen estudiantes cargados!');
}

//Ask for data
user = prompt('Ingrese su nombre de usuario');

//Conditionals
if (user == '') {
    alert('¡El usuario no puede estar vacío!');
} else {
    password = prompt('Ingrese su contraseña');

    if (password == '') {
        alert('¡La contraseña no puede estar vacía!');
    } else {
        alert('¡¡¡Acceso concedido!!!');

        tope = Number(prompt('¿Cuántos estudiantes quiere ingresar?'));

        while (tope > 0) {
            for (i=0; i <= tope; i++) {
                student_name = String(prompt('Ingrese el nombre del alumno.'));
    
                if (student_name === '' || student_name === NaN) {
                    alert('¡El nombre del alumno no puede estar vacío!');
                } else {
                    note = Number(prompt('Ingrese la nota del alumno.'));
    
                    if (note === '' || note >= 11 || note <= 0 || note === NaN) {
                        alert('¡La nota del alumno no tiene el formato correcto!');
                    } else {
                        const student = new Student(student_name, note);
                        saveStudentIntoDB(student);
                        --tope;
                    }
                }
            }
    
            if (students.length === 0) {
                showErrorMsg();
            } else {
                showAllStudents();
            }
        }

        
    }
}