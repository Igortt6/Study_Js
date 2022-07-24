/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('DOMContentLoaded', () => {
  // TABS
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParants = document.querySelector('.tabheader__items'); // Скрываем все табы 

  function hideTabContant() {
    tabsContent.forEach(item => {
      // item.style.display = 'none'; // скрытие через style
      item.classList.add('hide');
      item.classList.remove('show', 'fade'); // скрытие через класс
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  ; // показываем таб по индексу + значение по умолчанию

  function showTabContant(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  ;
  hideTabContant();
  showTabContant(); // слушаем клин по таб меню и вызываем обе функции

  tabsParants.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContant();
          showTabContant(i);
        }
      });
    }
  }); // _____________________________________________________________________________________________________________________________
  // TIMER
  // 1 установить дату 
  // 2 опеределить разницу между дедлайном
  // 3 обновление таймера каждую минуту 

  const deadline = '2022-07-10'; // установка конечной даты
  // расчет даты в мс

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date()); // разница в датах в Мс
    // проверка на отрицательные значения.

    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24)), // разница в часах + округление
      hours = Math.floor(t / (1000 * 60 * 60) % 24), minutes = Math.floor(t / (1000 * 60) % 60), seconds = Math.floor(t / 1000 % 60);
    } // возвращение расчитаных значений в виде объекта


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
  } // функция 


  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000); // установка автообновления таймера

    updateClock(); // вызов функции для избежания задержки в 1000 мс в верстке

    function updateClock() {
      const t = getTimeRemaining(endtime); // записываем значения на страницу

      days.innerHTML = gerZero(t.days);
      hours.innerHTML = gerZero(t.hours);
      minutes.innerHTML = gerZero(t.minutes);
      seconds.innerHTML = gerZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline); // _____________________________________________________________________________________________________________________________
  // MODAL
  // 1 функция открытия окна 
  // 2 функция закрытия окна
  // 3 обработчик собыитий на кнопки

  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId); // не вызывать модал если уже открывалось вручную
  }

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  } // закрытие модалки при клике на подложку


  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.getAttribute('data-close' == '')) {
      closeModal();
    }
  }); // закрытие модалки при клике на клавишу Еск

  document.addEventListener('keydown', e => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });
  const modalTimerId = setTimeout(openModal, 5000); // открывать модал через N секунд

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll); // удаляем вызов модалки в низу страници после 1 раза
    }
  }

  window.addEventListener('scroll', showModalByScroll); // вызываем модалку при прокрутве в низ стриници
  // Используем классы для карточек

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
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
        this.class = 'menu__item';
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

  } // данные которые будет пушить


  new MenuCard('img/tabs/vegy.jpg', 'vegy', 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 9, '.menu .container').render();
  new MenuCard('img/tabs/elite.jpg', 'elite', 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 14, '.menu .container', 'menu__item').render();
  new MenuCard('img/tabs/post.jpg', 'post', 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 21, '.menu .container', 'menu__item').render(); // _____________________________________________________________________________________________________________________________
  // FORMS (с форматом FormData и json)
  // 1) создаем блок с сообщениями с ошибками
  // 2) собираем все данные с форм в formData
  // 3) отправляем данные с помощью fetch

  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'img/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  forms.forEach(item => {
    // назначаем функцию postData на все формы странички. 
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit', e => {
      //    'submit' - событие отправки формы
      e.preventDefault(); //                      отмена поведения браузера

      const statusMassage = document.createElement('div'); // Новый елемент с выводом сообщения о статусе загрузки 

      statusMassage.src = message.loading;
      statusMassage.style.cssText = `
                display: block;
                margin: 0 auto;
            `; // form.append(statusMassage); // Метод Element.append() вставляет узлы или строки с текстом в конец Element.

      form.insertAdjacentElement('afterend', statusMassage); // добавляет переданный элемент в DOM-дерево относительно элемента, вызвавшего метод.

      const formData = new FormData(form); // передача данных из HTML формы в FormData объект

      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      fetch('server.php', {
        metod: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        // body: formData // для Форм дата 
        body: JSON.stringify(object) // для JSON

      }).then(data => data.text()).then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMassage.textContent = message.success;
        statusMassage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      });
    });
  } // // 1 Выделяем формы 
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
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    openModal();
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${massage}</div>
        </div>
        `;
    document.querySelector('.modal').append(thanksModal); // возвращаем форму в изначальный вид

    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }

  fetch('db.json').then(data => data.json()).then(res => console.log(res));
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map