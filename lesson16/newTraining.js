function Hamster(name) {
    this.stomach = [];
    this.name = name;
}

Hamster.prototype.eatApple = function () {
    this.stomach.push('apple'); // Добавляем яблоко в живот
    return this; // Возвращаем сам объект для цепочки
}

Hamster.prototype.eatBanana = function () {
    this.stomach.push('banana'); // Добавляем банан в живот
    return this; // Возвращаем сам объект для цепочки
}

Hamster.prototype.getStomach = function() {
    console.log(this.stomach);
}

const hamster1 = new Hamster('Puma');
const hamster2 = new Hamster('Fuma');
hamster1.eatApple().eatBanana().eatBanana();
hamster1.getStomach(); // ['apple', 'banana', 'banana']
hamster2.eatBanana().eatApple().eatApple();
hamster2.getStomach();