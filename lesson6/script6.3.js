
function RemoveElement(array, element){
    let newString=' ';
    for (let i = 0; i < array.length; i++){
        if (String(array[i]) !== String(element)){
            newString = newString + ' ' + array[i];
        }else {
            continue;
        }
    }
    let newArray =[];
    for (let j = 0; j < newArray; j++){

        newArray[j] = newString[j];

    }
    return newArray;
}

let haha = [1,5,9,'hello', true];
console.log(RemoveElement(haha,'hello'));
