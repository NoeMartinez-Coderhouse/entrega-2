function display(text, action) {
    return function() {
        action(text);
    }
}

function displaySubmitResult(e) {
    e.preventDefault();

    let student_name = document.getElementById("student-name-input").value;
    let student_surname = document.getElementById("student-surname-input").value;

    const studentLoaded = display(
        'Se ha agregado el alumno: ' + student_name + ' ' + student_surname + '.',
        alert);
        studentLoaded();

    location.reload();
}

let form = document.getElementById("add-student-form");
form.addEventListener('submit', displaySubmitResult);
