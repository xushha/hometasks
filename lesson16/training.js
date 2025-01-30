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
        sum = this.assessments.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
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
        this.index++; //
    }
    return this;
}

Student.prototype.summary = function () {
let allClasses = this.attendance.filter(el => el !== null);
let newAttendance = this.attendance.filter(el => el === true);
console.log (`newAttend ${newAttendance}`);
console.log(`present : ${newAttendance.length}`);
let averageAttendance = newAttendance.length/allClasses.length;
let gpaSum = this.assessments.reduce((sum, num) => sum + num, 0);
    console.log(`gpaSum : ${gpaSum}`);
let GPA = gpaSum/this.assessments.length;
console.log(`${averageAttendance} and ${GPA}`);
if (GPA >= 90 && averageAttendance >= 0.9){
 console.log('Молодець!');
} else {
    console.log('Редиска!');
}
}

const student1 = new Student('exampleName1', 'exampleSurname1', 1999, [100, 99, 80, 1]);

student1.present().absent().present().present();
console.log(student1.attendance);

console.log(student1.getAverage());
console.log(student1.summary());