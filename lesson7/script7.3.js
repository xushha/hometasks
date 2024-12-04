function PrintChoice() {
    let message = 'Your attempts are over. You should have input only numbers and only not under 100.' ;
    let i = 0;
    const maxAttempts = 10;
    do{
        let number = prompt('Please input number greater than 100');
        if (isNaN(Number(number) || Number(number) < 100)){
        } else if(Number(number) > 100) {
            message = `${number}` ;
            break;
        }
        i++;
    }
    while  (i < maxAttempts);
  return console.log(message);
}

PrintChoice();