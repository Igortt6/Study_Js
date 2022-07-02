// // // Возведение числа в степень через цикл
// // function pow (x, n) {
// //     let result = 1;

// //     for (let i = 0; i < n; i++) {
// //         result *= x;
// //     }

// //     return result;
// // }

// // Возведение числа в степень через рекурсию

// function pow (x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow (x, n - 1)
//     }
// }


// pow (2, 1) // 2
// pow (2, 2) // 4
// pow (2, 3) // 8
// pow (2, 4) // 16

//////////////////////////////////////////////////////////////////////////////////////////////////////////// Упражнениня 2.47 - 16
// Функция которая выводик факториал числа (n!)
function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }

    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1
    }
}
console.log(factorial(5)) //24)
factorial(1) //1
factorial(2) //2
factorial(3) //6
factorial(4) //24
