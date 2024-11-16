let body = document.querySelector('body')
let myForm = document.querySelector('form');
let nameInput = document.querySelector('.name-inp input')
let emailInput = document.querySelector('.email-inp input')
let phoneInput = document.querySelector('.phone-inp input')
let textInpArr = document.querySelectorAll('form input.text-input');
let formError = document.querySelector('main .registration-form .fill-error');




localStorage.cookieAgree = 'no';



// if(localStorage.cookieAgree = 'yes'){
//     document.querySelector('body').removeChild(document.querySelector('.cookie-wrap'))
// }

// cookieBut.addEventListener('click', (e) => {
//     console.log(localStorage.cookieAgree);
//     if(localStorage.cookieAgree == 'no'){
//         localStorage.cookieAgree = 'yes' ;
//         cookieBlock.style.display = ' none';
//     }
//     console.log(localStorage.cookieAgree);
// })

document.addEventListener("DOMContentLoaded", function() {
    let cookieBlock = document.querySelector('.cookie-wrap');
    let cookieBut = document.querySelector('.cookie button');

    // Проверяем, было ли принято решение о скрытии баннера
    if (localStorage.getItem("cookiesAccepted") === "true") {
        cookieBlock.style.display = "none"; // Скрываем баннер
    }

    // Обработчик события для кнопки
    cookieBut.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true"); // Сохраняем решение
        cookieBlock.style.display = "none"; // Скрываем баннер
    });
});





// myForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     let name = nameInput.value;
//     let email = emailInput.value;
//     let phone = phoneInput.value;
//     if(!name || !email || !phone){
//         formError.style.display = 'block';
//         console.log('empty error')
//         return;
//     }

//     window.location.href = 'success.html'
// })



