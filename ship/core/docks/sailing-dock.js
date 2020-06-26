'use strict';

/**
 * @typeof {Object} SailingDock
 * @param {Position} position
 * @param {Ship[]} ships
 */
class SailingDock extends Dock {
  constructor(position = new Position(0, 0), ships = []) {
    super(position, ships);
    this._shipType = SailingShip;
  };
};
