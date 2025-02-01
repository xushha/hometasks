function Student(name, surname, birthDate, assessments = []) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.assessments = assessments;
    this.attendance = Array(25).fill(null);
    this.index = 0;
}

Student.prototype.getAge = function () {
    const nowDate = new Date().getFullYear();
    return nowDate - this.birthDate;
}

Student.prototype.getAverage = function () {
    let sum;
    if (this.assessments.length === 0){
        return '0';
    } else {
        sum = this.assessments.reduce((total, grade) => total + grade, 0);
    }
    return sum/this.assessments.length;

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
let averageAttendance = newAttendance.length/allClasses.length;
let gpaSum = this.assessments.reduce((sum, num) => sum + num, 0);
let GPA = gpaSum/this.assessments.length;
if (GPA >= 90 && averageAttendance >= 0.9){
    return "Молодець!";
} else if(GPA < 90 && averageAttendance < 0.9){
    return "Редиска!";
} else {
    return "Добре, але можна краще!";
}
}

const student1 = new Student('exampleName1', 'exampleSurname1', 1999, [100, 99, 80, 1]);
const student2 = new Student('Thomas', 'Shelby',2003,[100,100,90,100,90,90]);
const student3 = new Student('Tom','Ford',1814, [100,100,100,100,100]);
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