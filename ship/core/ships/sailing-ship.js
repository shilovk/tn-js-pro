'use strict';

/**
 * @typedef {Object} SailingShip
 * @param {string} name
 * @param {string} model
 * @param {Position} position
 * @param {number} mastCount
 * @param {number} sailArea
 */
function SailingShip(name, model, position = new Position(0, 0), color = 'white', damage = 0, mastCount = 1, sailArea) {
  Ship.call(this);
  this.name = name;
  this.model = model;
  this.position = position;
  this.color = color;
  this.mastCount = mastCount;
  this.sailArea = sailArea;
};

SailingShip.prototype = Object.create(Ship.prototype);
SailingShip.prototype.constructor = Ship;
