var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');

function showError(input, mess) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText = mess;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();

        if(!input.value) {
            isEmptyError = true;
            showError(input, 'Khong duoc de trong');
        }
    })

    return isEmptyError;
}

function checkEmail(input) {
    const regexEmail =  
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim();

    if(regexEmail.test(input.value)) {
        showSuccess(input);
    }

    return regexEmail.test(input.value);
}

function checkLenngthError(input, min, max) {
    input.value = input.value.trim();
    if(input.value.length < min) {
        showError(input, `Phai co it nhat ${min} ki tu`);
        return true;
    }else if(input.value.length > max){
        showError(input, `Khong duoc vuot qua ${max} ki tu`);
        return true;
    }

    showSuccess(input);
    return false;
}

function checkPassword(inputPassword, inputCfPassword) {
    if(inputPassword.value !== inputCfPassword.value) {
        showError(inputCfPassword, `Mat khau khong khop`);
        return true;
    }

    return false;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkEmptyError([username, email, password, confirmPassword]);
    checkEmail(email);
    checkLenngthError(username, 5, 16);
    
    checkPassword(password, confirmPassword);
})
