'use strict'

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');


inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass);
    request.open('GET', 'js/current.json'); 
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8') // заголовок 
    request.send();



    // Свойства:
    // status  https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP
    // statusText
    // response
    // readyState  https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState


    request.addEventListener('load', () => { // отслеживает статус готовности в данный момент 
        if(request.status === 200) { // статус выполнено и Ок 
            console.log(request.response); // возвращаен нам Объект JSON от сервера:
            // {
            //     "current": {
            //         "usd": 74
            //     }
            // }
            const data = JSON.parse(request.response); // переводим объет JSON в обычные данные.
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что-то пошло не так'
        }
    });





})

