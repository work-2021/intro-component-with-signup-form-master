let form = document.querySelector('.form-content form');
let errorMsg = document.querySelectorAll('.form-content form div span');
let firstName = document.getElementById('fn');
let lastName = document.getElementById('ln');
let email = document.getElementById('email');
let password = document.getElementById('pass');
email.onblur = function() {
  if (email.validity.valueMissing || email.validity.typeMismatch) {
    errorMsg[2].classList.add('error');
  } 
  else {
    errorMsg[2].classList.remove('error');
  }
};
firstName.onblur = function() {
  if (firstName.value.split(' ').join('') === '') {
    firstName.value = '' ;
    errorMsg[0].classList.add('error');
  } else {
    errorMsg[0].classList.remove('error');
  }
};
lastName.onblur = function() {
  if (lastName.value.split(' ').join('') === '') {
    lastName.value = '' ;
    errorMsg[1].classList.add('error');
  } else {
    errorMsg[1].classList.remove('error');
  }
};
password.onblur = function() {
  if (password.value.split(' ').join('') === '') {
    password.value = '' ;
    errorMsg[3].classList.add('error');
  } else {
    errorMsg[3].classList.remove('error');
  }
};
form.addEventListener('submit', (event) => {
  if (firstName.value.split(' ').join('') === '' && lastName.value.split(' ').join('') === '' && email.value.split(' ').join('') === '' && password.value.split(' ').join('') === '') {
    firstName.focus() ;
    event.preventDefault();
  } else {
    errorMsg.forEach((elm) => {
      if (elm.classList.contains('error')) {
        event.preventDefault();
      }
    });
  }
});