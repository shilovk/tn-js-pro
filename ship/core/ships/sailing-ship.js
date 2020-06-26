'use strict';

/**
 * @typedef {Object} SailingShip
 * @param {string} name
 * @param {string} model
 * @param {Position} position
 * @param {number} mastCount
 * @param {number} sailArea
 */
class SailingShip extends Ship {
  constructor(name, model, position = new Position(0, 0), color = 'white', damage = 0, mastCount = 1, sailArea) {
    super(name, position, color, damage);
    this.mastCount = mastCount;
    this.sailArea = sailArea;
  };
};
