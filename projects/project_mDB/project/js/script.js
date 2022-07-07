'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const   advertising = document.querySelectorAll('.promo__adv img'),
            poster = document.querySelector('.promo__bg'),
            genre = poster.querySelector('.promo__genre'),
            movieList = document.querySelector('.promo__interactive-list'),
            addForm = document.querySelector('form.add'),
            addInput = addForm.querySelector('.adding__input'),
            checkbox = addForm.querySelector('[type="checkbox"]');
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value; // Получаем что ввел пользователь в форме
        const favorite = checkbox.checked; // Получаем булиновое значение на чекбоксе

        if (newFilm) { // проверка что форма заполнена (значение тру)

            if (newFilm.length > 21) { // Сокращение названия до 21 символов
                newFilm = `${newFilm.substring(0, 22)}...`
            }

            if (favorite) { // Если стоит галочка
                console.log("Добавляем любимый фильм")
            }
            movieDB.movies.push(newFilm); // Пушим данные с формы в movieDB
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
    })
    
    const   delAdv = (arr) => {
        arr.forEach(element => {
            element.remove()
        });  
    } // Удаление рекламы
    
    const someCheng = () => {
        genre.textContent = 'драма'
        poster.style.backgroundImage = 'url("img/bg.jpg")'
    } // Замена заголовка и фоновой картинки
    
    const sortArr = (arr) => {
        arr.sort();
    } // функция сортировки
    
    function createMovieList (film, parent) { // замена списка на созданный ранее movieDB
        parent.innerHTML = "";
        sortArr(film);

    
        film.forEach((item, i) => {
            parent.innerHTML += `<li class="promo__interactive-item"> ${(i + 1)} ${item}
            <div class="delete"></div>
            </li>`
            ;
        })
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(film, parent);
            })
        });
    } 
    
    delAdv(advertising);
    someCheng();
     createMovieList(movieDB.movies, movieList);
    
})
// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту */

