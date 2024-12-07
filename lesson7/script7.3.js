
function PrintChoice() {
let message ;
    for (let i = 0; i < 10; i++ ){
        const input = prompt('Please input number greater than 100');
        if (Number(input) > 100 ) {
            message = `${input}`;
            break;
        } else {
            message = 'You have run out of attempts. You should have entered  number greater than 100';
        }
    }
    return console.log(message);

}

PrintChoice();