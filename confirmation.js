document.addEventListener("DOMContentLoaded", function() {
    let bottomLeftButton = document.getElementById("bottomLeftButton");

    bottomLeftButton.addEventListener("click", function() {
        // Navigate to the next page
        window.location.href = "/date&time.html";
    });
});
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

form.addEventListener('submit', e=> {
    e.preventDefault();

    validateInputs();

});

const setError = (element, message) => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector ('.error');

errorDisplay.innertext = 'message';
inputControl.classlist.add('error');
inputControl.classlist.remove ('success')
}

const validateInputs = () => {
const usernameValue = username.value.trim ();
const emailValue = email.value.trim();
const phonenumberValue = phonenumber.value.trim ();
const username1Value = username1.value.trim();
}

if (usernameValue === '') {
     setError(username, 'Username is required');
} else {
setSuccess(username);
}

if(emailValue === ''){
setError(email, 'email is required');
} else if (!isValidEmail(emailValue)) {
setError (email, 'provide a valid email address');
}else {
setSuccess(email);
}