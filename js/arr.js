"use strict"

const arr = [1, 2, 5, 15, 26, 14, 4];

// перебор каждого елемента в массиве через метод
arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`)
});


// перебор каждого елемента в массиве через цинкл (можно использовать break или continue)
for (let value of arr) {
    console.log(`${value}: внутри массива ${arr}`);
}