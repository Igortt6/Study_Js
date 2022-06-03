"use strict"

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    },
    castomMetof: function() {
        console.log('созданая функция запускается');
    }
};
// запускает созданый метод объекта
options.castomMetof(); 

//обращение к свойству объекта
console.log(options.name); 
// обращение к свойству объекта в нутри  объекта
console.log(options['color']['border']); 
// перебирает свойства объекта и показывает значение.  
for (let key in options) {
    // if если есть объкт в нутри объекта
    if (typeof  (options[key]) === 'object') {
        for (let i in  options[key]) {
            console.log(`Свойство ${key} имеет значение ${options[key][i]}`);   
        }
    } else {
        // если в нустри обьекта нет других объктов
        console.log(`Свойство ${key} имеет значение ${options[key]}`); 
    }
};

//Выводит количество свойст в объекте 
console.log(Object.keys(options).length);