function Product(a){
    return function (b){
        return a * b;
    }
}
console.log(Product(3)(5));
console.log(Product(4)(5));
console.log(Product(2)(2));