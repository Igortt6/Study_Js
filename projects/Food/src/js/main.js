'use strict'
window.addEventListener('DOMContentLoaded', () =>{
// TABS
    const   tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabsParants = document.querySelector('.tabheader__items');
    
    // Скрываем все табы 
    function hideTabContant () { 
        tabsContent.forEach(item =>{
            // item.style.display = 'none'; // скрытие через style
        item.classList.add('hide')
        item.classList.remove('show', 'fade') // скрытие через класс
        })

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
    };
    // показываем таб по индексу + значение по умолчанию
    function showTabContant (i = 0) {
        tabsContent[i].classList.add('show', 'fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active');
    };

    hideTabContant();
    showTabContant();
    // слушаем клин по таб меню и вызываем обе функции
    tabsParants.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContant();
                    showTabContant(i);
                }
            })
        }
    })
// _____________________________________________________________________________________________________________________________
// TIMER
// 1 установить дату 
// 2 опеределить разницу между дедлайном
// 3 обновление таймера каждую минуту 
    const deadline = '2022-08-20'; // установка конечной даты

    // расчет даты в мс
    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date()); // разница в датах в Мс

        // проверка на отрицательные значения.
        if (t <= 0) {
            days =0
            hours = 0
            minutes = 0
            seconds = 0
        } else {
            days = Math.floor(t/(1000*60*60*24)), // разница в часах + округление
            hours = Math.floor( (t/(1000*60*60)) % 24),
            minutes = Math.floor( (t/(1000*60)) % 60),
            seconds = Math.floor( (t/1000) % 60);
        } 
            
        // возвращение расчитаных значений в виде объекта
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function gerZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    // функция 
    function setClock (selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000); // установка автообновления таймера

        updateClock(); // вызов функции для избежания задержки в 1000 мс в верстке

        function updateClock () {
            const t = getTimeRemaining(endtime);

            // записываем значения на страницу
            days.innerHTML = gerZero(t.days);
            hours.innerHTML = gerZero(t.hours);
            minutes.innerHTML = gerZero(t.minutes);
            seconds.innerHTML = gerZero(t.seconds);
            
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);
// _____________________________________________________________________________________________________________________________
// MODAL
// 1 функция открытия окна 
// 2 функция закрытия окна
// 3 обработчик собыитий на кнопки

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');

    modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
    });

    // Функция открытия модал
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'
        clearInterval(modalTimerId); // не вызывать модал если уже открывалось вручную
    }

    // Функция закрытия модал
    function closeModal () {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = ''
    }

    // закрытие модалки при клике на подложку
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "" ) {
            closeModal();
            console.log(e.target);
        }
    })
    
    // закрытие модалки при клике на клавишу Еск
    document.addEventListener ('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
            console.log(e.code);
        }
    });

    const modalTimerId = setTimeout(openModal, 5000); // открывать модал через N секунд

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll) // удаляем вызов модалки в низу страници после 1 раза
        }
    }

    window.addEventListener('scroll', showModalByScroll) // вызываем модалку при прокрутве в низ стриници


    // Используем классы для карточек
    class MenuCard {
        constructor (src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector); // куда будем пушить объект
            this.transfer = 35; // курст вальют 
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.class = 'menu__item'
                element.classList.add(this.class);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            this.parent.append(element); // метод пуша
        }
    }

    //Функция GET для формирования карточек автоматически
    const getResource = async (url) => {
        const res = await fetch(url);
        // Добавляем проверку и сообщение об ошибке  промиса res
        if (!res.ok) {
            throw new Error (`Cuold not fetch ${url} status:${res.status}`)
        }
        // Возвращаем ПРОМИС в формате .json
        return await res.json();
    }
    
    getResource('http://localhost:3000/menu')        
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
    
// _____________________________________________________________________________________________________________________________
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
// _____________________________________________________________________________________________________________________________
    // ОПОВЕЩЕНИЕ ПОЛЬЗОВАТЕЛЯ СО СПИНЕРОМ
    // 1) Скрываем старые инпуты в форме
    // 1) Создаем новый блок благодарности и пушим на страницу
    // 1) возвращаем форму в изначальный вид
    // 1) назначаем картинку вместо текста, задаем инлайн стили, помещаем куда нужно 3
    
    function showThanksModal(massage) {
        const prevModalDialog = document.querySelector('.modal__dialog')

        prevModalDialog.classList.add('hide');
        openModal();

        const  thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${massage}</div>
        </div>
        `;

        document.querySelector('.modal').append(thanksModal);

        // возвращаем форму в изначальный вид
        setTimeout(() => {
            thanksModal.remove()
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));
// _____________________________________________________________________________________________________________________________
// // Слайдер 1 версия
// // Выбрать все елементы с которыми будет работать
// // Определяем индекс  слайда
// // Функция показа слайда и скрытия остальных (с условием, работы стрелок по кругу)
// // Обрабатываем клики на стрелочки 
// // создаем нумерацию общего количества слайдов 
//     const slides = document.querySelectorAll('.offer__slide'),
//             prevSlide = document.querySelector('.offer__slider-prev'),
//             nextSlide = document.querySelector('.offer__slider-next'),
//             currentSlide = document.querySelector('#current'),
//             totalSlide = document.querySelector('#total');
//     let slideIndex = 1;

//     showSlides(slideIndex);

    // if (slides.length < 10) { 
    //     totalSlide.textContent = `0${slides.length}`;
    // } else {
    //     totalSlide.textContent = slides.length;
    // }

//     function showSlides(n) {
//         if (n > slides.length) {
//             slideIndex = 1;
//         }

//         if (n < 1) {
//             slideIndex = slides.length;
//         }
        
//         slides.forEach(item => item.style.display = 'none');

//         slides[slideIndex - 1].style.display = 'block';

//         if (slides.length < 10) { 
//             currentSlide.textContent = `0${slideIndex}`;
//         } else {
//             currentSlide.textContent = slideIndex;
//         }
//     }

//     function plusSlides(n) {
//         showSlides(slideIndex += n);
//     }

//     prevSlide.addEventListener('click', () => {
//         plusSlides(-1);
//     });

//     nextSlide.addEventListener('click', () => {
//         plusSlides(1);
//     });

// _____________________________________________________________________________________________________________________________
// Слайдер 2 версия
// Устанавливаем ширину slidesField в 400% (на 4 слайда)
// задаем всем слайдам одинаковую ширину
// выстраиваем все слайды в 1 линию slidesField + анимация
// скрываем все слайды вне зоны видипости slidesWrapper
// Обработчик события для передвигания слайдера
// 
// 
    const   slides = document.querySelectorAll('.offer__slide'), 
            slider = document.querySelector('.offer__slider'),
            prevSlide = document.querySelector('.offer__slider-prev'),
            nextSlide = document.querySelector('.offer__slider-next'),
            currentSlide = document.querySelector('#current'),
            totalSlide = document.querySelector('#total'),
            slidesWrapper = document.querySelector('.offer__slider-wrapper'),
            slidesField =  document.querySelector('.offer__slide-inner'),
            width = window.getComputedStyle(slidesWrapper).width; // получаем ширину слайда заданого в CSS
    let slideIndex = 1; // Номер слайда
    let offset = 0; // Индикатор смещения слайдов 

    // Устанавливаем общее количество слайдов на странице.
    const letTotalSlideIndex = function() {
        if (slides.length < 10) { 
            totalSlide.textContent = `0${slides.length}`;
        } else {
            totalSlide.textContent = slides.length;
        };
    };

    // Устанавливаем текущий номер слайда
    const letCurrentSlideIndex = function() {
        if (slides.length < 10) { 
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            currentSlide.textContent = slideIndex;
        };
    };
    letTotalSlideIndex(); 
    letCurrentSlideIndex();

    // Устанавливаем ширину окна слайдера, в зависимости от количества слайдов на странице. + анимация
    slidesField.style.width = 100 * slides.length + '%'; // width 400% 
    slidesField.style.display = 'flex';
    slidesField.style.transition = "0.5s all";

    // скрываем слайды вне зоны видипости
    slidesWrapper.style.overflow = 'hidden';

    // Устанавливаем для каждого слайда одинаковую ширину. (Проверка на разыне картинки)
    slides.forEach(slide => { // 1 slide = width 100% 
        slide.style.width = width;
    });

    // Для позиционирования точек
    slider.style.position = 'relative';

    const   indicators = document.createElement('ol'),
            dots = [];
    indicators.classList.add('carousel-indicators'); // класс со стилями в CSS

    slider.append(indicators); 

    // Создаем точки по количеству слайдов на странице. Задаем класс со стилями. 
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot'); // класс со стилями в CSS
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    // Анимаци активной кнопки
    const activeDotAnimate = function () {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex -1].style.opacity = 1;
    };

    // превращаем 500px в 500.
    const deleteNotDigits = function (str) {
        return +str.replace(/\D/g, '') // удаляем все НЕ цифры 
    };


    // offset = ширина 1 слайда * количество слайдов-1
    //Обработчик событий КЛИК - навигация на следующий слайд
    nextSlide.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)){ // 650 * 4-1
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
        
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        letCurrentSlideIndex();

        activeDotAnimate();
    });

    //Обработчик событий КЛИК - навигация на предидущий слайд
    prevSlide.addEventListener('click', () => {
        if (offset == 0){
            offset = deleteNotDigits(width) * (slides.length - 1)
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        letCurrentSlideIndex();

        activeDotAnimate();
    });


    // Обаботчик событий КЛИК - навигация по клику на точки
    dots.forEach(dot =>{
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to')

            slideIndex = slideTo; // Привязываем точку к  активному слайду
            offset = deleteNotDigits(width) * (slideTo - 1)

            slidesField.style.transform = `translateX(-${offset}px)`;

            letCurrentSlideIndex();

            activeDotAnimate();
        })
    })
    // Навигация для слайдера 
    // получаем весь слайдер
    // устанавливаем position relative для позиционрирования точек 
    // перебором устанавливаем количество точек = количеству слайдеров

// _____________________________________________________________________________________________________________________________
// Калькулятор
    const result = document.querySelector('.calculating__result span');

    let sex, height, weight, age, ratio;

        
    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function initLocalSatteings (selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem =>{
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }
    initLocalSatteings('#gender div', 'calculating__choose-item_active');
    initLocalSatteings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '_____';
            return;
        }

        if (sex === 'female') {
            result.textContent = Math.round(( 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        }else {
            result.textContent = Math.round(( 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    };

    calcTotal();

    function getStaticInformation (selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio')
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));

                }
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
    
                e.target.classList.add(activeClass);
    
                calcTotal();
            });
        });
    }
    getStaticInformation('#gender div', 'calculating__choose-item_active'); // для 1 строки
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active'); // для 3 строки

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);


        input.addEventListener('input', () => {
            
            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }

            switch(input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }  
            calcTotal();

        });
    }
    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
});
