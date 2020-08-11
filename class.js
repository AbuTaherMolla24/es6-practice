class Student{
    constructor(studentID, studentName){
        this.studentID = studentID;
        this.studentName = studentName;
        this.schoolName = "Molla School"
    }

}

const student1 = new Student(33, "anki");
const student2 = new Student(44, "daud");
const student3 = new Student(44, "anonna");

console.log(student1, student2, student3);