//let students;

const table = document.getElementsByClassName("items");

(fetch('../students.json')
    .then((response) => {
        if (response.ok) {
            return response.json();
        }else {
            throw new Error('Hubo un error en el servidor: ' + response.status);
        }
    }))
    .then((students) => {
        showData(students);
    })
    .catch((error) => console.log(error));

const showData = (students) => {
  console.log(students);
  let body = '';
  for (let i=0; i < students.length; i++) {
    body += `<tr><td>${students[i].id}</td><td>${students[i].name}</td><td>${students[i].surname}</td><td>${students[i].course}</td><td>${students[i].shift}</td><td>${students[i].address}</td></tr>`
  }

  document.getElementById('students').innerHTML = body;
}