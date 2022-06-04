"use strict"
//                               от 5 до 10 
for (i=5; i<=10; i++) {
    console.log(i);
}
//                               от 20 до 10 с остановкой на 13
for (i=20; i>=10; i--) {
    if (i===13){
        break;
    }
    console.log(i);
}
//                               от 2 до 10, только четные 
for (i=2; i<=10; i++) {
    if (i % 2 === 1) {
        continue;
    } else {
        console.log(i);
    }
}
//                               от 2 до 10, только нечетные 
for (i=2; i<=10; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
//                              от 3 до 15 
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
//                              от 3 до 15 через while
let i=2;
while (i<=16) {
    if (i % 2 === 0) {
        i++;
        continue;
        
    } else {
        console.log(i);
        i++;
    }
}
//                              массив с данными от 5 до 10
const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
    console.log(arrayOfNumbers);

}
// console.log(arrayOfNumbers);
////////////////////////////////////////////////////////////////////////////////////////////// средний уровень


//                               заполняем новый массив, числами из старого
function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    for ( let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(result);
};
firstTask();
//                               Увеличиваем все цифры массива в 2 раза. Если строка - добавляем " - done"
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for ( let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
        else if (typeof(data[i]) === 'number'){
            data[i] = data[i] * 2;
        }
    }
    console.log(data);
};
secondTask();

//                               Разворачиваем массив наоборот
function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    for ( let i = 1; i <= data.length; i++) {
        result [i - 1] = data[data.length - i]
    }
    console.log(result);
}
thirdTask();
////////////////////////////////////////////////////////////////////////////////////////////// ФОРМИРОВАНИЕ ФИГУР
//                                пирамида
//                                *
//                                **
//                                ***
//                                ****
//                                *****

function pitamida1 () {
    const lines = 5;
    let result = '';
    
    for ( let i = 1; i <= lines; i++) {
    
        for ( let j = 0; j < i; j++ ) {
            result += '*';
        }
        result += '\n';
    }
    
    console.log(result);
}
pitamida1 ();



//                                Ёлка
                                //      *
                                //     ***
                                //    *****
                                //   *******
                                //  *********
                                // ***********
function pitamida2 () {
    const lines = 5;
    let result = '';
    
    for ( let i = 0; i <= lines; i++ ) {
        for ( let j = 0; j < lines - i; j++ ) {
            result += ' ';
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            result += "*";
        }
        result += '\n';
    }
    console.log(result);
}
pitamida2 ();