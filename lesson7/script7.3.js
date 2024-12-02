function PrintChoice(){
    for (let i = 0; i < 10; i++){
        let quantity = prompt(('Please input number under 100:'));
        if (Number(quantity) < 100 || isNaN(Number(quantity)) || quantity.trim() === ""  ) {
          alert('Please input right number!')
        }
        else {
            return function (){


            }
        }
    }

}

PrintChoice();