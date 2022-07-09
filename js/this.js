'use strict'

// 1) обычная функция: this = Window, но если стиоит 'use strict' - undefined
function showThis (a, b) {
    console.log(this) // Window или undefined
    function sum() {
        console.log(this) // Window или undefined
        return a + b
    }
    console.log(sum()) // 9
}
showThis(4, 5);


// 2) Контекст вызова у методов объекта - сам объект 
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this) 
    }
};
obj.sum(); // Выводит сам объект {a: 20, b: 15, sum: ƒ}

// 2) Контекст вызова у методов объекта - сам объект 
const obj2 = {
    a: 20,
    b: 15,
    sum: function() {
        function shout () {
            console.log(this)
        }
        shout(); //  Window или undefined, потому что это не методов объекта
    }
};
obj2.sum(); 

// 3) this в конструкторах и классах - это новый экземпляр объекта
function User (name, id) {
    this.name = name;
    this.id - id;
    this.human = true;
}

const ivan = new User('Ivan', 28);  // Пример:
                                    // ivan.name = 'Ivan';
                                    // ivan.id - 28;
                                    // ivan.human = true;

// 4) Ручная привязка this: call, apply, bind
function sayName (surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
// {name: 'John'}
// JohnSmith
sayName.apply(user, ['Smith']);
// {name: 'John'}
// JohnSmith

function count (num) {
    return this*num;
}
const double = count.bind(2);
console.log(double(3)) // 6
console.log(double(13)) // 26