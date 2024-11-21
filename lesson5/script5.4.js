
//task 5.1
// let message= '';
// for (let k = 20; k <= 30; k += 0.5) {
//
//    message = message + ' ' + k;
//
// } console.log(message);
//

// task 5.4
    do {
        const primeNumber = Number (prompt ('Input your number'));
        if ( primeNumber === 1 || primeNumber === 0  || isNaN(primeNumber)) alert('Your input is incorrect. You can use only whole numbers , except 1 and 0');

        let k = 0;
        for (let j = 1; j <= primeNumber; j++){
            if (primeNumber % j === 0) {
                k++;
            }
        }

        if (k > 2) {
            alert(`So the number ${primeNumber} isn't prime because it has ${k} dividers.`);
        } else {
            alert(` ${primeNumber} is  prime because it has only 2 dividers ( 1 and ${primeNumber})`);
        }

    } while ( confirm('Do you want to continue?'));


