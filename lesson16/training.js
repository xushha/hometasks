function Student(name, surname, birthDate, assessments = []) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.assessments = assessments.filter(num => typeof num === 'number' && num >= 0 && num <= 100);
    this.attendance = Array(25).fill(null);
    this.index = 0;
}

Student.prototype.getAge = function () {
    const nowDate = new Date().getFullYear();
    return `Age of ${this.name} : ${nowDate - this.birthDate}`;
}

Student.prototype.getAverage = function () {
    let sum;
    if (this.assessments.length === 0){
        return `${this.name} has no grades :(`;
    } else {
        sum = this.assessments.reduce((total, grade) => total + grade, 0);
    }
    return `Average rating of ${this.name} : ${sum/this.assessments.length}`;

}

Student.prototype.present = function () {
    if (this.index < this.attendance.length) {
        this.attendance[this.index] = true;
        this.index++;
    }
    return this;
}

Student.prototype.absent = function () {
    if (this.index < this.attendance.length) {
        this.attendance[this.index] = false;
        this.index++;
    }
    return this;
}

Student.prototype.summary = function () {
let allClasses = this.attendance.filter(el => el !== null);
let newAttendance = this.attendance.filter(el => el === true);
let averageAttendance = allClasses.length > 0 ? newAttendance.length / allClasses.length : 0;
let gpaSum = this.assessments.reduce((sum, num) => sum + num, 0);
let GPA = gpaSum/this.assessments.length;
if (GPA >= 90 && averageAttendance >= 0.9){
    return `${this.name} -> Молодець!`;
} else if(GPA < 90 || averageAttendance < 0.9){
    return `${this.name} -> Редиска!`;
} else {
    return `${this.name} -> Добре, але можна краще!`;
}
}

const student1 = new Student('exampleName1', 'exampleSurname1', 1999, [100, 99, 80, 1]);
const student2 = new Student('Thomas', 'Shelby',2003,[100,100,90,100,90,90]);
const student3 = new Student('Tom','Ford',1814, [100,100,100,100,100]);
const student4 = new Student ('Joe','Goldberg',1980);
const student5 = new Student('Lana','Rey',1990, ['hi',100,true,80,90]);
student1.present().absent().present().present();
student2.present().present().absent().present().present().present().present().present().present().present();
for(let i = 0; i < 30; i++){
    if (i % 2 === 0 ){
       student3.present();
    } else{
        student3.absent();
    }
}
console.log(student1.getAverage());
console.log(student1.getAge());
console.log(student1.summary());
console.log(student2.getAverage());
console.log(student2.getAge());
console.log(student2.summary());
console.log(student3.getAverage());
console.log(student3.getAge());
console.log(student3.summary());
console.log(student4.getAverage());
student4.present().present().present();
console.log(student4.summary())
console.log(student5.summary());