class School{
    //Atributes
    name;
    students = [];

    //Constructor
    constructor(name){
        this.name = name;
    }

    // Métodos
    addStudent = (student) => {
        this.students.push(student);
    }

    showStudents = function() {
        let all_students_name = this.students.map(s => s.name);
        alert('Los nombres de los alumnos ingresados son ' + all_students_name);
    }
}