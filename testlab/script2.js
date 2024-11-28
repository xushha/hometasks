function power(x, n) {

    if (typeof x !== 'number' || typeof n !== 'number') {
        return `X = ${x} N = ${n} .Error: Both x and n must be numbers.`;
    }
    if (x < 0 || x > 999) {
        return `X = ${x} N = ${n} .Error: x must be in the range [0..999].`;
    }
    if (n < 1 || n > 100) {
        return `X = ${x} N = ${n} .Error: n must be in the range [1..100].`;
    }

    let result = Math.pow(x, n);
    return `X = ${x} N = ${n} .The power n of x is ${result}`;
}


console.log(power(2, 3));
console.log(power(-1, 2));
console.log(power(1000, 5));
console.log(power(100, 0));
console.log(power(100, 200));
console.log(power('abc', 2));
console.log(power(3, 'qwe'));
console.log(power(999, 1));