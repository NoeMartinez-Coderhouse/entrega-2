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

function displaySubmitResult(e) {
    e.preventDefault();

    let user = document.getElementById("user-input").value;

    const hasAccess = display(
        '¡Felicitaciones ' + user + '! ¡¡¡Acceso concedido!!!',
        alert);
    hasAccess();

    window.location.href = 'pages/home-page.html';
}

const checkbox = document.getElementById("password-checkbox");
checkbox.addEventListener('click', () => {
    let password = document.getElementById("password-input");

    if (password.type === "password") {
        password.type = "text";    
    } else {
        password.type = "password";
    }
});

let form = document.getElementById("login-form");
form.addEventListener('submit', displaySubmitResult);