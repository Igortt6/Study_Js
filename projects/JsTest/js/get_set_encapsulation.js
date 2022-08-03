'use strict'; 
// ______________________________________________________________________________________________________________________________
//                                          Использование get/set в объекте

const persone = {                                           // Создаем объект
    name: "Jhon",                                           // свойство объекта
    surname: "Snow",
    age: 28,
    myMethod: function () {                                 // метод объета 
        // do something 
    },

    get userAge() {                                         // задаем свойсво GET объекта (свойство аксессор)
        return this.age;
    },
    
    set userAge(num) {                                      // задаем свойсво SET объекта (свойство аксессор)
        this.age = num;
    }
}
 console.log(persone.userAge);                              // используем GET
 console.log(persone.userAge = 30);                         // используем SET


// ______________________________________________________________________________________________________________________________
//                                              Использование get/set в функции - Конструктор

function User(name, age, age2) {
    this.name = name;
    this.age = age;
    let userAge = age2;

    this.say = function() {
        console.log(`Имя пользователя ${this.name}, возраст ${this.age}  возраст ${userAge}`);
    };

    this.getAge2 = function() {
        return userAge;
    }

    this.setAge2 = function(age2) {
        userAge = age2;
    }    
}

const jhon = new User('Jhon Snow', 20, 30);                     // создаем новый объект jhon
console.log(jhon.name);                                     // получаем свойство name
console.log(jhon.age = 26);                                 // Изменяем свойство age
console.log(jhon.userAge);                                  // undefined || нельзя менять напрямую
console.log(jhon.getAge2());                                // используем фун. Get для доступа
jhon.setAge2(40);                                           // используем фун. Set для изменения

jhon.say();
//______________________________________________________________________________________________________________________________
//                                                 Использование get/set в Классах

class  UserClass {
    constructor (name, age, age2) {
        this.name = name;
        this.age = age;
        this.userAge = age2;
    }   
    say() {
        console.log(`Имя пользователя ${this.name}, возраст ${this.age}  возраст ${this.userAge}`);
    }

    getAge2() {
        return this.userAge;
    }

    setAge2(age2) {
        this.userAge = age2;
    }
}

const jhonClass = new User('Jhon Snow', 20, 30);                     // создаем новый объект jhon
console.log(jhonClass.name);                                     // получаем свойство name
console.log(jhonClass.age = 26);                                 // Изменяем свойство age
console.log(jhonClass.userAge);                                  // undefined || нельзя менять напрямую
console.log(jhonClass.getAge2());                                // используем фун. Get для доступа
jhonClass.setAge2(40);                                           // используем фун. Set для изменения

jhonClass.say();