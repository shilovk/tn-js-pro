'use strict';

/**
 * @typedef {Object} Group
 * @param {number} number
 * @property {number} number
 * @property {Student[]} studentList
 */
function Group(number) {
  // if (typeof number != 'number') return new Error('Group number is not a number');

  this.number = number;
  this.studentList = [];

  /**
   * Get actual sick students list
   * @return {Student[]} array sick student list
   */
  this.absentStudentList = function() {
    return this.studentList.filter(student => student.absent());
  };

  /**
   * Add student to a group
   * @param {Student} student
   */
  this.addStudent = function(student) {
    if (!(student instanceof Student)) return new Error('Student is incorrect');

    this.studentList.push(student);
  };
};
