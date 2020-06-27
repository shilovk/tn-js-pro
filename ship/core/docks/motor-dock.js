'use strict';

/**
 * @typeof {Object} MotorDock
 * @param {Position} position
 * @param {Ship[]} ships
 */
function MotorDock(position = new Position(0, 0), ships = []) {
  Dock.call(this);
  this.position = position;
  this.ships = ships;
  this._shipType = MotorShip;
};

MotorDock.prototype = Object.create(Dock.prototype);
MotorDock.prototype.constructor = Dock;
