'use strict';
class Rectangle {
    // Метод constructor — специальный метод, необходимый для создания и инициализации объектов, созданных, с помощью класса.
    constructor (height, width) {
        this.h = height;
        this.w = width;
    }
    // новый метод класса
    calcArea() {
        return this.h * this.w;
    }
}

// новый класс ColoredRectangleWithText наследует методы класса Rectangle
class ColoredRectangleWithText extends Rectangle {
    constructor (height, width, text, bgColor) {
        // вызов конструктора родительского класса
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`); // Текст: Hello World, цвет: red
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea())

const squere = new Rectangle(10, 10);
const long = new Rectangle(20, 100);
console.log(squere.calcArea()) // 100
console.log(long.calcArea()) // 2000