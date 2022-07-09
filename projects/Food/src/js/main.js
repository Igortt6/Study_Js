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

        // MODAL
    // 1 функция открытия окна 
    // 2 функция закрытия окна
    // 3 обработчик собыитий на кнопки

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden'
        });
    });

    function closeModal () {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = ''
    }
    modalCloseBtn.addEventListener('click', closeModal);

    // закрытие модалки при клике на подложку
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })
    
    // закрытие модалки при клике на клавишу Еск
    document.addEventListener ('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });
});