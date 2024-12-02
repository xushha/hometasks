function Product(a){
    return function (b){
        return a*b;
    }
}
console.log(Product(3)(5));