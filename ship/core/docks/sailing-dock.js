'use strict';

/**
 * @typeof {Object} SailingDock
 * @param {Position} position
 * @param {Ship[]} ships
 */
function SailingDock(position = new Position(0, 0), ships = []) {
  Dock.call(this);
  this.position = position;
  this.ships = ships;
  this._shipType = SailingShip;
};

SailingDock.prototype = Object.create(Dock.prototype);
SailingDock.prototype.constructor = Dock;
