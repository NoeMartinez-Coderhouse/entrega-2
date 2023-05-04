class Student{
    //Atributes
    name;
    notes = [];

    //Constructor
    constructor(name){
        this.name = name;
    }

    // Métodos
    addNote = (note) => {
        this.notes.push(note);
    }

    showNotes = function() {
        let all_notes = ''; 
        for(let i = 0; i < this.notes.length; i++) {
            all_notes = all_notes + this.notes[i] + ' ';
        }
        alert('Las notas del alumno ' + this.name + ' son ' + all_notes);
    }

    calculateAverage = () => {
        let acu = 0;
        for(let i = 0; i < this.notes.length; i++) {
            acu = acu + this.notes[i];
        }
        return acu / this.notes.length;
    }
}