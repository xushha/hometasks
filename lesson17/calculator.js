class Calculator {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
    multiply(x, y) {
        return x * y;
    }
    divide(x, y) {
        if (y === 0) {
            return "0 can`t be a divisor"
        }
        return x / y;
    }
}

const calc = new Calculator();
console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(3, 6));
console.log(calc.divide(8, 2));
console.log(calc.divide(9,0));
console.log(calc.divide(0,9));
console.log(calc.subtract(3,8));
