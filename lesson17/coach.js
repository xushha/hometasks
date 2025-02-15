class Coach {
    constructor(name,specialization,rating) {
        this.name = name;
        this.specialization = specialization;
        if (typeof rating !== 'number' || isNaN(rating) || rating < 0 || rating > 5) {
            this.rating = null;
        } else {
            this.rating = rating;
        }
    }
    displayInfo() {
        console.log(`Coach: ${this.name}, Specialization: ${this.specialization}, Rating:${this.rating}`);
    }
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);
const coach3 = new Coach('Ksu Chabanenko', 'Dance', 'very good');

coach1.displayInfo();
coach2.displayInfo();
coach3.displayInfo();
