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
    return console.log(str);
    return str;

    }
};
getMathResult (5,4);

/////////////////////////////////////////////////////////////////////////// доп задачи по функциям 2.29 Js+R
//                                                                      Функция вычисляет объем и прощадь куба (объем куба Хв3степени) (площадь Хв2степени *6)
function calculateVolumeAndArea(length) {
    let volume = 0;
    let area = 0;
    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return console.log("При вычислении произошла ошибка");
    }
    volume = length * length * length;

    area = 6 * (length * length);

    return console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
};
calculateVolumeAndArea(5);

//                                                                      Высляем номер купе по месту в вагоне. С проверками
function getCoupeNumber(seatNum) {
    if ( typeof(seatNum) !== 'number'|| seatNum < 0 || !Number.isInteger(seatNum)) {
        return console.log('Ошибка. Проверьте правильность введенного номера')
    }
    if (seatNum === 0 || seatNum > 36) {
        return console.log('Таких мест не сущеуствует')
    } else {
        return console.log(Math.ceil(seatNum / 4));
    }
};
getCoupeNumber(9);


//                                                                      Выдаем время по количеству минут
function getTimeFromMinutes(Time) {
    let houres = Math.floor(Time / 60);
    let minutes = Time - (houres * 60 );
    let houresWord = '';
    
    if (houres === 0) {houresWord = 'часов';
    } else if (houres == 1) {houresWord = 'час';
    } else if (houres == 2 || houres == 3 || houres == 4) {houresWord = 'часа';
    } else { houresWord = 'часов';
    }

    if ( typeof(Time) !== 'number'|| Time < 0 || !Number.isInteger(Time)) {
        return console.log('Ошибка, проверьте данные');
    } else {
        return console.log(`Это ${houres} ${houresWord} и ${minutes} минут`);
    }
}
getTimeFromMinutes(500);

//                                                                      Принимает 4 числа и выдает наибольшее. с проверкой

function findMaxNumber(num1,num2,num3,num4) {
    if (typeof(num1 && num2 && num3 && num4) !== 'number') {
        return console.log(0);
    } else {
        return console.log(Math.max(num1,num2,num3,num4));
    }
}
findMaxNumber(3,1,1,4.5);

//                                                                      Задача с числами фибоначи. Длинна равна аргументу 
function fib(fibNum) {
    if (!Number.isInteger(fibNum) || fibNum < 0) {
        return console.log(" ! ")
    } else {
        return console.log(" Go ")
    }
    
}
fib (3);