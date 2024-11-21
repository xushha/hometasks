
//task 5.1
// let message= '';
// for (let k = 20; k <= 30; k += 0.5) {
//
//    message = message + ' ' + k;
//
// } console.log(message);
//
//task 5.3
// let N =  Number(prompt('Please input the whole number'));
// if (Number.isInteger((N)) && N > 0){
//     for (let i= 1; i <= 100 && i ** 2 <= N ; i++){
//         console.log(i);
//     }
// } else {
//     alert(' Your input is incorrect')
// }
// task 5.4
const primeNumber = Number (prompt('Input your number'));
if (primeNumber === 1 || isNaN(primeNumber)) {
    alert('Your input is incorrect. You can use only whole numbers , except 1');
}
let k = 0;
    for (let j = 1; j <= primeNumber; j++){
            if (primeNumber % j === 0) {
                k++;

            }
    }

    if (k > 2){
     console.log(`So the number ${primeNumber} isn't prime because it has ${k} dividers.`);
    } else{
        console.log(` ${primeNumber} is  prime because it has only 2 dividers ( 1 and ${primeNumber})`);
    }

