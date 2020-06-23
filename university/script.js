'use strict';

const student1 = new Student('Ivanov Ivan Ivanovich');
const student2 = new Student('Petrov Petr Petrovich');
const student3 = new Student('Vasin Vasiliy');

const group = new Group(123);
group.addStudent(student1);
group.addStudent(student2);
group.addStudent(student3);
console.log(group.studentList);

// console.log(group.absentStudentList());
student1.healthy(false);
student3.absent(true);
console.log(group.absentStudentList());
