// function pow(x,n){
//     //базовый кондишн
//     if(n === 1) {
//         debugger
//         return x;
//     }
//     debugger
//     return x * pow(x, n-1);
// }
//
// console.log(pow(2,4));

//задача 1
// function printNumbers(n) {
//     // Базовый случай: если n равно 0, завершить рекурсию
//     if (n === 0) {
//         return;
//     }
//     // Рекурсивный вызов для чисел от 1 до n-1
//     printNumbers(n - 1);
//     // Вывод текущего числа
//     console.log(n);
// }
//
// // Пример вызова функции
// const n = 10; // Задайте значение n
// printNumbers(n);
// задача 2
function printRange(a, b) {
    // Если A меньше или равно B, выводим в порядке возрастания
    if (a <= b) {
        console.log(a);
        if (a < b) {
            printRange(a + 1, b); // Рекурсивный вызов для следующего числа
        }
    }
    // Если A больше B, выводим в порядке убывания
    else {
        console.log(a);
        if (a > b) {
            printRange(a - 1, b); // Рекурсивный вызов для предыдущего числа
        }
    }
}

// Пример вызова функции
const A = 5; // Первое число
const B = 1; // Второе число
printRange(A, B);
