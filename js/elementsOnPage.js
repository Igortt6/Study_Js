"use strict"

const box = document.getElementById('box'),
      btns = document.getElementsByTagName ('button'), // выводит псевдомассив!
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('heart'),
      oneHeart = document.querySelector ('.heart'),
      wrapper = document.querySelector('.wrapper');


// назначение ИНЛАЙН стилей елементу BOX
box.style.borderRadius = 'Blue';
box.style.width = '500px';         

// назначение нескольких стилей еменету box
box.style.cssText = 'background-color: blue; width: 500px'; 

// назначение стилей всем елементам псевдомассива hearts
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

// назначение стилей всем елементам псевдомассива hearts через метод .forEach
hearts.forEach(item =>{
    item.style.backgroundColor = 'blue'
})

// создание елемента на странице
const div = document.createElement('div')

// манипуляция с классами объекта 
div.classList.add('black');

// добавление елемента div в конец body
document.body.append(div);
wrapper.append(div);
wrapper.prepend(div);

// Удаление елементов со страници
circles[0].remove();

// Замена елементов на странице
hearts[0].replaceWith(circles[0]);

// Редактирование елементов 
div.innerHTML = "<h1>Hello World</h1>"
div.textContent = "Hello World"

// Вставка куста кода HTML
div.insertAdjacentHTML('beforebegin', '<h1>Hello</h1>');