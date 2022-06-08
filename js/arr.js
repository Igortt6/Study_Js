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


const str = prompt ('', '');
const products = str.split('', ''); // Формирует массив из сток используя разделитель 
products.join('; ')  // Формирует строку из массива используя разделитель 
console.log(products);

// правильная сортировка массива, функция сорт
arr.sort(compareNum);
function compareNum (a,b,) {
    return a - b;
}
console.log(arr);

////////////////////////////////////////////////////////////////////////////////////////// Упражнения 2.35 -11 arr

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';
    if (arr.length === 0 ) {
        str = 'Семья пуста';
    } else {
        str = 'Семья состоит из: ';
       arr.forEach(eachMember => {
           str += `${eachMember} `;
       });
    };

// //  короткая запись if (?:)
    // arr.length === 0 ? str = 'Семья пустая' :  str = 'Семья состоит из: '
    // arr.forEach(eachMember => {
    //     str += `${eachMember} `
    // })

    console.log(str);
}
showFamily(family);

// Возвращает массив в виде строк в столюец в нижнеи регистре
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(cityName => {
        cityName.toLowerCase(`${cityName}\n`);
        console.log(cityName.toLowerCase());
    });
}
standardizeStrings(favoriteCities);

////////////////////////////////////////////////////////////////////////////////////////// Упражнения 2.35 -12 arr
// переворачивает строку наоборот. С проверкой;
const someString = 'This is some strange string';
function reverse(str) {
    for (let i = 0; i <= str.length; i++)
    console.log (i)
}
reverse(someString);



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

}
