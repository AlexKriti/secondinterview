let body = document.querySelector('body')
let myForm = document.querySelector('form');
let nameInput = document.querySelector('.name-inp input')
let emailInput = document.querySelector('.email-inp input')
let phoneInput = document.querySelector('.phone-inp input')
let textInpArr = document.querySelectorAll('form input.text-input');
let formError = document.querySelector('main .registration-form .fill-error');
let cookieBlock = document.querySelector('.cookie-wrap');
let cookieBut = document.querySelector('.cookie button');


localStorage.cookieAgree = 'no';



// if(localStorage.cookieAgree = 'yes'){
//     document.querySelector('body').removeChild(document.querySelector('.cookie-wrap'))
// }

cookieBut.addEventListener('click', (e) => {
    localStorage.cookieAgree = 'yes' ;
    cookieBlock.style.display = ' none';
})





myForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let name = nameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    if(!name || !email || !phone){
        formError.style.display = 'block';
        console.log('empty error')
        return;
    }

    window.location.href = 'success.html'
})



