const button = document.getElementById('button');
const form = document.getElementById('form');
const userEmail = document.getElementById('user_email');
const userPassword = document.getElementById('user_password');

addEventListener('click', (e) => {
    let buttonText = document.getElementById('loginText');
    if(e.target.tagName === 'BUTTON' ||  e.target == buttonText) {
        input1 = document.getElementById('down-1');
        input2 = document.getElementById('down-2');
        button.classList.add('extend');
        buttonText.classList.add('fade');
        input1.classList.add('fade-in');
        input2.classList.add('dropdown');
        button.classList.add('re-button');
    }

});



