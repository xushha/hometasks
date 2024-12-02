let result = 0;
function Sum(sum){

    function addToSum(){
        result = result + sum;
        console.log(result);
    }
    addToSum();
}
Sum(4);
Sum(6);
Sum(10);
Sum(7);
