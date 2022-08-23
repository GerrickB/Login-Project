function validateLogin() {
    event.preventDefault();
    const email = 'email@gmail.com';
    const password = 'pass';
    const username = 'Neo';
    const movie = 'Matrix';
    const enteredEmail = document.getElementById('email').value;
    const enteredPass = document.getElementById('password').value;
    const enteredName = document.getElementById('name').value;
    const enteredMovie = document.getElementById('movie').value;
    const rememberMe = document.getElementById('remember');

    if (email == enteredEmail && password == enteredPass && username == enteredName && movie == enteredMovie) {
        sessionStorage.setItem('auth', 'yes');
        if (rememberMe.checked) {
            localStorage.setItem('auth', 'yes')
        }
        document.getElementById('welcomeMsg').innerHTML = 'Welcome, please click here to access your account <a href="account.html">Account</a>';
    }
    else {
        document.getElementById('welcomeMsg').innerHTML = 'Please try again';
    }

    // Error messages when wrong input
    if (email != enteredEmail){
        document.getElementById('emailError').innerHTML = 'Wrong email';
    }
    if (password != enteredPass){
        document.getElementById('passError').innerHTML = 'Wrong password';
    }
    if (username != enteredName){
        document.getElementById('nameError').innerHTML = 'Wrong name';
    }
    if (movie != enteredMovie){
        document.getElementById('movieError').innerHTML = 'Wrong movie';
    }

    return false;
}

// If the local storage is filled, autofill login details and autocheck remember me after refresh
function rememberChecked() {
    if (localStorage.getItem('auth') == 'yes') {
        document.getElementById('remember').checked = true;
        document.getElementById('email').value = 'email@gmail.com';
        document.getElementById('password').value = 'pass';
        document.getElementById('name').value = 'Neo';
        document.getElementById('movie').value = 'Matrix';
    }
}

rememberChecked();