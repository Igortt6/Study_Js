import {closeModal, openModal} from './modal'

function forms() {
// FORMS (с форматом FormData и json)
// 1) создаем блок с сообщениями с ошибками
// 2) собираем все данные с форм в formData
// 3) отправляем данные с помощью fetch

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',

    }

    // назначаем функцию postData на все формы странички.
    forms.forEach(item => {  
        bindPostData(item);
    })

    //функция отправки данных АСИНХРОННАЯ 
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        // Возвращаем ПРОМИС в формате .json
        return await res.json();
    }

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {  //    'submit' - событие отправки формы
            e.preventDefault(); //                      отмена поведения браузера

            const statusMassage = document.createElement('div') // Новый елемент с выводом сообщения о статусе загрузки 
            statusMassage.src = message.loading;
            statusMassage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;

            // form.append(statusMassage); // Метод Element.append() вставляет узлы или строки с текстом в конец Element.
            form.insertAdjacentElement('afterend', statusMassage) // добавляет переданный элемент в DOM-дерево относительно элемента, вызвавшего метод.

            const formData = new FormData(form); // передача данных из HTML формы в FormData объект

            const json = JSON.stringify(Object.fromEntries(formData.entries())); // Превращение formData в массив массивов, затем в объкт, затем в JSON 

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMassage.textContent = message.success;
                statusMassage.remove();
            })
            .catch(() => {
                showThanksModal(message.failure);
            })
            .finally(() => {
                form.reset();
            })
        })
    }

// // 1 Выделяем формы 
// // 2 Создаем обарботчик событий, при отправке формы. Отменяем поведения браузера.
// // 3 Создаем API -  XMLHttpRequest
// // 4 Создаем обарботчик событий, при загрузе формы. Создаем варинты сообщений, выводим новый .div. Очищаем форму, убираем сообщение.  

//     const forms = document.querySelectorAll('form');

//     const message = {
//         loading: 'img/spinner.svg',
//         success: 'Спасибо! Скоро мы с вами свяжемся',
//         failure: 'Что-то пошло не так...',

//     }

//     forms.forEach(item => { // назначаем функцию postData на все формы странички. 
//         postData(item);
//     })

//     function postData(form) {
//         form.addEventListener('submit', (e) => {  //    'submit' - событие отправки формы
//             e.preventDefault(); //                      отмена поведения браузера

//             const statusMassage = document.createElement('div') // Новый елемент с выводом сообщения о статусе загрузки 
//             statusMassage.src = message.loading;
//             statusMassage.style.cssText = `
//                 display: block;
//                 margin: 0 auto;
//             `;
//             // form.append(statusMassage); // Метод Element.append() вставляет узлы или строки с текстом в конец Element.
//             form.insertAdjacentElement('afterend', statusMassage) // добавляет переданный элемент в DOM-дерево относительно элемента, вызвавшего метод.

//             const request = new XMLHttpRequest();
//             request.open('POST', 'server.php');

//             request.setRequestHeader('Contante-type', 'application/json'); // заголовки
//             const formData = new FormData(form); // передача данных из HTML формы в FormData объект

//             const object = {};
//             formData.forEach(function(value,key) {
//                 object[key] = value;
//             })

//             const json = JSON.stringify(object);
//             request.send(json); // Отправляем данные на сервер 

//             // request.send(formData); // Отправляем данные на сервер 

//             request.addEventListener('load', () => { // отслеживаем загрузку формы
//                 if (request.status === 200) { // 200 OK («хорошо») (Список кодов состояния HTTP)
//                     console.log(request.response);
//                     showThanksModal(message.success);
//                     statusMassage.textContent = message.success;
//                     form.reset(); // сбрасываем форму после отправки.
//                        statusMassage.remove() 
//                 } else {
//                     showThanksModal(message.failure);
//                 }
//             })

//         })
//     }

}
export default forms;