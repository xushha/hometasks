//task 5.3
const N =  Number (prompt('Please input the whole number'));
console.log (`So the number is ${N}.`);
if (Number.isInteger((N)) && N > 0){
    for (let i= 1; i <= 100 && i ** 2 <= N ; i++){
        console.log(`${i} => ${i**2} < ${N}`);
    }
} else {
    alert(' Your input is incorrect')
}