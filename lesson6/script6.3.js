
function RemoveElement(array, item){
    let k = 0;

    for (let i = 0; i < array.length; i++){
        if ( array [i] !== item){
            array[k] = array[i];
            k++;
        }
    }
    array.length = k;
    return array;
}
console.log(RemoveElement([1,2,3,7,5], 10));