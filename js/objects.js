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
options.castomMetof(); // 'созданая функция запускается'

//обращение к свойству объекта
console.log(options.name);  // test

// обращение к свойству объекта в нутри  объекта
console.log(options['color']['border']); // black

// перебирает свойства объекта и показывает значение.  
for (let key in options) {
    // if если есть объкт в нутри объекта
    if (typeof  (options[key]) === 'object') {
        for (let i in  options[key]) {
            console.log(`Свойство ${key} имеет значение ${options[key][i]}`);   
        }
    } else {
        // если в внутри обьекта нет других объктов
        console.log(`Свойство ${key} имеет значение ${options[key]}`); 
    }
};

//Выводит количество свойст в объекте 
console.log(Object.keys(options).length); // 5

//////////////////////////////////////////////////////////////////////////////////////////////////////////// Упражнениня 2.35 - 10

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj) {
        const {age} = obj;
        const {languages} = obj.skills;
        let str = "";
        // console.log(age)
        // console.log(languages)
        str = `Мне ${age} и я владею языками:`;
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
        // let {skills} = plan;
        // let {exp} = skills
        // console.log(exp)//                      ДЕСТРУКТУРИЗАЦИЯ 
    console.log(plan.skills.exp)//                  2 варинат
    // console.log(plan['skills']['exp'])//         3 варинат
}
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    let {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str =+ `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    } 
    return str;
}
showProgrammingLangs(personalPlanPeter);
