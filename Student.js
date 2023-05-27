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

    calculateAverage = () => {
        let acu = 0;
        for(let i = 0; i < this.notes.length; i++) {
            acu = acu + this.notes[i];
        }
        return acu / this.notes.length;
    }
}