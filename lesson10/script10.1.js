
function User(name, age, address){
    this.name = name;
    this.age = age;
    this.address = address;
}
User.prototype.getInfo = function(){
    console.log(`Name : ${this.name}, Age: ${this.age}, Address: ${this.address} `);
}
const user = new User('Ksu',20, 'Odesa');

const user2 = new User ('Bogdan', 21, 'Odesa');
user.getInfo();
user2.getInfo();