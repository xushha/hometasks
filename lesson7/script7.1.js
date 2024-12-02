function doSum() {
    let result = 0;

    return function(sum) {
        result += sum;
        return result;
    };
}

const sum = doSum();
const sum2 = doSum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));

console.log(sum2(5));
console.log(sum2(7));
console.log(sum2(8));
console.log(sum2(9));

