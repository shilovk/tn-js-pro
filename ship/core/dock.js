'use strict';

/**
 * @typedef {Object} Dock
 * @param {Position} position
 * @param {Ship[]} ships
 */
function Dock(position = new Position(0, 0), ships = []) {
  this.position = position;
  this.ships = ships;

  /**
   * @param {Ship} ship
   */
  this.moor = function(ship) {
    if (this.ships.find(s => ship === s))
      return new Error('Ship is already in Dock');

    if (!this.position.equalXY(ship.position))
       throw new Error('Ship should be moved to Dock');

    ship.dropAnchor();
    this.ships.push(ship);
  };

  /**
   * @param {Ship} ship
  */
  this.unmoor = function(ship) {
    const index = this.ships.findIndex(s => ship === s);

    if (index < 0)
      return new Error('Ship is not in Dock');

    ship.riseAnchor();
    this.ships.splice(index, 1);
  };
};
