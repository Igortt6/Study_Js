'use strict';
//                               
function sayHello () {
    return "Привет, Антон";
};
sayHello();

//                               Возвращает соседние числа от заданого.
function returnNeighboringNumbers (number) {
    let arr = [number - 1, number, number + 1];
    return arr;
};
returnNeighboringNumbers (10);

//                               Возвращает чисто умноженое на 2число с проверкой :  5---10---15---20
function getMathResult(num1, num2) {
    if (typeof(num2) !== 'number' || num2 <= 0) {
        return num1;
    } else {
        let str = '';
        for (let i = 1; i <= num2; i++) {
            if (i === num2) {
                str += `${num1 * i}`;
                // Тут без черточек в конце
            } else {
                // str += `${num1 * i}---`;
                // Это тоже самое, что и
                str = str + num1 * i + "---";
            }
        }
    // return console.log(str);
    str.toUpperCase()
    return str;

    }
};
getMathResult (5,4);


