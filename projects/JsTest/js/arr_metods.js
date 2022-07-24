"use strict"
// Упрежнеине по написанию кода 20 5-80 
// Бюджет торгово центра 

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8 )
}
showGoodFilms(films);
console.log(showGoodFilms(films));


function showListOfFilms(arr) {
    return arr.map(elem => elem.name).join(', ');
}
console.log(showListOfFilms(films));



function setFilmsIds(arr) {

}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) { 
}

// ___________________________________________________________________________________________________

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];
// const getTotalIncomeAmount = (data) => {
//     return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
// }

const getPositiveIncomeAmount = (data) => {
    let data2 = data.filter(data => data.amount >= 0 )
    return data2
};
// Вариант через обычную функи: 
// const getTotalIncomeAmount = (data) => {
//     if (data.some(element => element.amount < 0)) {
//         return  data.reduce(function(accumulator, currentValue){
//             return accumulator + currentValue.amount
//         },0)
//     } else {
//         getPositiveIncomeAmount(funds);
//     }
// };
const getTotalIncomeAmount = (data) => {
    if (data.some(element => element.amount < 0)) {
        return data.reduce((accumulator, currentValue) => accumulator + currentValue.amount,0)
    } else {
        getPositiveIncomeAmount(funds);
    }
};
console.log(getTotalIncomeAmount(funds));



