
const array = [ 1, 5, 'let', true, 6 , 0 , false, '5', '0'];
function GetArithmeticMean(array){
    let sum = 0;
    let quantity = 0;
    for ( let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'number'){
            sum = sum + array[i];
            quantity++;
        } else{
            continue;
        }
    }
    return sum/quantity;
}
console.log(GetArithmeticMean(array));