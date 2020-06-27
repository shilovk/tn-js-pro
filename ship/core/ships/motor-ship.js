'use strict';

/**
 * @typedef {Object} MotorShip
 * @param {string} name
 * @param {string} model
 * @param {Position} position
 * @param {number} power
 * @param {string} material
 */
function MotorShip(name, model, position = new Position(0, 0), color = 'white', damage = 0, power, material = 'steel') {
  Ship.call(this);
  this.name = name;
  this.model = model;
  this.position = position;
  this.color = color;
  this.damage = damage;
  this.power = power;
  this.material = material;
};

MotorShip.prototype = Object.create(Ship.prototype);
MotorShip.prototype.constructor = Ship;
