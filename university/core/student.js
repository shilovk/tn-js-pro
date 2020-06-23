'use strict';

/**
 * @typedef {Object} Student
 * @param {string} fullNameString
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} patronymic
 * @property {boolean} healthy
 */
function Student(fullNameString) {
  if (typeof fullNameString !== 'string')
    throw new Error('Full name must be a string');

  this._healthy = true;
  this._absent = false;
  [this.lastName, this.firstName, this.patronymic] = fullNameString.trim().split(' ');

  if (!this.lastName || !this.firstName)
    throw new Error('Last name or/and first name are incorrect');

  this.fullName = function() {
    return [this.lastName, this.firstName, this.patronymic].join(' ');
  };

  this.shortName = function() {
    let result = [this.lastName, this.firstName[0]+'.'].join(' ');
    if (this.patronymic)
      result += `${this.patronymic[0]}.`;

    return result;
  };

  /**
   * Get/set healthy student status
   * @param  {boolean} value
   * @return {boolean} healthy status
   */
  this.healthy = function(value = this._healthy) {
    this._healthy = value;
    this._absent = !this.healthy;

    return this._healthy;
  };

  /**
   * Get/set absent student status
   * @param  {boolean} value
   * @return {boolean} absent status
   */
  this.absent = function(value = this._absent) {
    return this._absent = value;
  };
};
