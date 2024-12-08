const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [1,'10', true, 3,8, -10];
function getEvenNumbers(arr) {
    return arr.filter(i => typeof(i) === 'number' && i % 2 === 0 );
}


const even = getEvenNumbers(arr);
console.log(even);
console.log(getEvenNumbers(arr2));
