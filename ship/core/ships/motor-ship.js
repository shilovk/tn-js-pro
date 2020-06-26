'use strict';

/**
 * @typedef {Object} MotorShip
 * @param {string} name
 * @param {string} model
 * @param {Position} position
 * @param {number} power
 * @param {string} material
 */
class MotorShip extends Ship {
  constructor(name, model, position = new Position(0, 0), color = 'white', damage = 0, power, material = 'steel') {
    super(name, position, color, damage);
    this.power = power;
    this.material = material;
  };
};
