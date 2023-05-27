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

function display(text, action) {
    return function() {
        action(text);
    }
}

function forEachOne(array, action) {
    for (const e of array) {
        action(e);
    }
}

function sortAsc(array) {
    return array.sort( (a, b) => a - b );
}

//Ask for data
user = prompt('Ingrese su nombre de usuario');

//Conditionals
if (user === '') {
    const emptyUser = display(
        '¡El usuario no puede estar vacío!',
        alert);
    emptyUser();
} else {
    password = prompt('Ingrese su contraseña');

    if (password === '') {
        const emptyPass = display(
            '¡La contraseña no puede estar vacía!',
            alert);
        emptyPass();
    } else {
        const hasAccess = display(
            '¡Felicitaciones ' + user + '! ¡¡¡Acceso concedido!!!',
            alert);
        hasAccess();

        tope = Number(prompt('¿Cuántos estudiantes quiere ingresar?'));

        console.log(tope);

        // Partimos de tener solo una escuela
        school = new School("Escuela 1");

        while (tope > 0) {
            for (i=0; i <= tope; i++) {
                student_name = String(prompt('Ingrese el nombre del alumno.'));

                if (student_name === '' || student_name === NaN) {
                    const emptyName = display(
                        '¡El nombre del alumno no puede estar vacío!',
                        alert);
                    emptyName();
                } else {

                    student = new Student(student_name);

                    n_notes = Number(prompt('¿Cuántas notas desea ingresar?'));

                    while (n_notes > 0) {
                        note = Number(prompt('Ingrese la nota del alumno.'));
    
                        if (note === '' || note >= 11 || note <= 0 || note === NaN) {
                            const emptyNote = display(
                                '¡La nota del alumno no tiene el formato correcto!',
                                alert);
                            emptyNote();
                        } else {
                            student.addNote(note);
                            --n_notes;
                        }
                    }
                    forEachOne(student.notes, console.log);
                    alert(sortAsc(student.notes));

                    is_average = String(prompt('¿Desea calcular su promedio? (Y | N)'));

                    if (is_average === 'Y' || is_average === 'y') {
                        let average = student.calculateAverage();
                        const averageAlert = display(
                            'Su promedio es de: ' + average,
                            alert);
                        averageAlert();
                    }

                    school.addStudent(student);
                    --tope;
                }
            }
        }

        school.showStudents();
    }
}