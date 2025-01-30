function Student(name, surname, birthYear, grades = []) {
    let _name = name;
    let _surname = surname;
    let _birthYear = birthYear;
    let _grades = grades;
    let _attendance = new Array(25).fill(null);

    this.getName = function () {
        return _name;
    };

    this.setName = function (newName) {
        if (typeof newName !== "string") {
            console.log("Invalid name");
            return null;
        }
        _name = newName;
    };

    this.getSurname = function () {
        return _surname;
    };

    this.setSurname = function (newSurname) {
        if (typeof newSurname !== "string") {
            console.log("Invalid surname");
            return null;
        }
        _surname = newSurname;
    };

    this.getBirthYear = function () {
        return _birthYear;
    };

    this.setBirthYear = function (newBirthYear) {
        if (typeof newBirthYear !== "number" || newBirthYear < 0) {
            console.log("Invalid birth year");
            return null;
        }
        _birthYear = newBirthYear;
    };

    this.getAge = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - _birthYear;
    };

    this.getGrades = function () {
        return _grades;
    };

    this.setGrades = function (newGrades) {
        if (!Array.isArray(newGrades) || !newGrades.every(grade => typeof grade === "number")) {
            console.log("Invalid grades");
            return null;
        }
        _grades = newGrades;
    };

    this.getAverageGrade = function () {
        if (_grades.length === 0) return 0;
        const sum = _grades.reduce((acc, grade) => acc + grade, 0);
        return sum / _grades.length;
    };

    this.present = function () {
        const index = _attendance.indexOf(null);
        if (index === -1) {
            console.log("Усі заняття вже відзначені.");
            return;
        }
        _attendance[index] = true;
    };

    this.absent = function () {
        const index = _attendance.indexOf(null);
        if (index === -1) {
            console.log("Усі заняття вже відзначені.");
            return;
        }
        _attendance[index] = false;
    };

    this.getAverageAttendance = function () {
        const attendedClasses = _attendance.filter((entry) => entry === true).length;
        const totalClasses = _attendance.filter((entry) => entry !== null).length;
        return totalClasses === 0 ? 0 : attendedClasses / totalClasses;
    };


    this.summary = function () {
        const avgGrade = this.getAverageGrade();
        const avgAttendance = this.getAverageAttendance();

        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    };
}

let student1 = new Student("Ксенія", "Чабаненко", 2003, [95, 88, 92, 100]);
let student2 = new Student("Богдан", "Шевченко", 2001, [85, 78, 80, 70]);
// const student3 = new Student("Катерина", "Федоренко", 2002, [91, 93, 89, 96]);
let student3 = new Student();
student3.setName('Катерина');
student3.setSurname('Осадча');
student3.setBirthYear(2001);
student3.setGrades([100,80,95,85]);
student1.present();
student1.present();
student1.absent();
student2.present();
student2.absent();
student3.present();
student3.present();
student3.present();

console.log(student1.getAge());
console.log(student1.getAverageGrade());
console.log(student1.getAverageAttendance());
console.log(student1.summary());

console.log(student2.getAge());
console.log(student2.getAverageGrade());
console.log(student2.getAverageAttendance());
console.log(student2.summary());

console.log(student3.getAge());
console.log(student3.getAverageGrade());
console.log(student3.getAverageAttendance());
console.log(student3.summary());
