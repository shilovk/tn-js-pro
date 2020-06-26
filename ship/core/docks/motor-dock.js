'use strict';

/**
 * @typeof {Object} MotorDock
 * @param {Position} position
 * @param {Ship[]} ships
 */
class MotorDock extends Dock {
  constructor(position = new Position(0, 0), ships = []) {
    super(position, ships);
    this._shipType = MotorShip;
  };
};
