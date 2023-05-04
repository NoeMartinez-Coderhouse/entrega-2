///Declaration of variables y/o constantes
let user;
let password;
let i;
let tope = 0;
let student_name;
let note;
let n_notes = 0;
const students = [];
let student;
let school;
let is_average;


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

        console.log(tope);

        // Partimos de tener solo una escuela
        school = new School("Escuela 1");

        while (tope > 0) {
            for (i=0; i <= tope; i++) {
                student_name = String(prompt('Ingrese el nombre del alumno.'));

                if (student_name === '' || student_name === NaN) {
                    alert('¡El nombre del alumno no puede estar vacío!');
                } else {

                    student = new Student(student_name);

                    n_notes = Number(prompt('¿Cuántas notas desea ingresar?'));

                    while (n_notes > 0) {
                        note = Number(prompt('Ingrese la nota del alumno.'));
    
                        if (note === '' || note >= 11 || note <= 0 || note === NaN) {
                            alert('¡La nota del alumno no tiene el formato correcto!');
                        } else {
                            student.addNote(note);
                            --n_notes;
                        }
                    }
                    student.showNotes();

                    is_average = String(prompt('¿Desea calcular su promedio? (Y | N)'));

                    if (is_average === 'Y' || is_average === 'y') {
                        let average = student.calculateAverage();
                        alert('Su promedio es de: ' + average);
                    }

                    school.addStudent(student);
                    --tope;
                }
            }
        }

        school.showStudents();
    }
}