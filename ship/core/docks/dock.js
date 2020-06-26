'use strict';

/**
 * @typedef {Object} Dock
 * @param {Position} position
 * @param {Ship[]} ships
 */
function Dock(position = new Position(0, 0), ships = []) {
  this.position = position;
  this.ships = ships;
  this._shipType = Ship;
};

Dock.prototype = {
  /**
   * @param {Ship} ship
   */
  moor: function(ship) {
    if (this.ships.find(s => ship === s))
      return new Error('Ship is already in the Dock');

    if (!this._checkShipType(ship))
      return new Error(`Ship is not supported for this Dock`);

    if (!this.position.equalXY(ship.position))
       throw new Error('Ship should be moved to the Dock');

    ship.dropAnchor();
    return this.ships.push(ship);
  },

  /**
   * @param {Ship} ship
  */
  unmoor: function(ship) {
    const index = this.ships.findIndex(s => ship === s);

    if (index < 0)
      return new Error('Ship is not in Dock');

    ship.riseAnchor();
    return this.ships.splice(index, 1);
  },

  /**
   * @param {Ship} ship
   */
  repair: function(ship) {
    if (this.ships.findIndex(s => ship === s) < 0) return new Error('Ship is not in Dock');

    return ship.damage = 0;
  },

  /**
   * @param {Ship} ship
   * @param {string} color
   */
  paint: function(ship, color) {
    if (this.ships.findIndex(s => ship === s) < 0) return new Error('Ship is not in Dock');

    if (!color || typeof color !== 'string') return new Error('New color is not correct');

    return ship.color = color;
  },

  /**
   * @param {Ship} ship
   */
  change: function(ship) {
    if (this.ships.findIndex(s => ship === s) < 0) return new Error('Ship is not in Dock');

    return new Ship(ship.name, ship.model, ship.position, ship.color, 0);
  },

  /**
   * @param {Ship} ship
   */
  _checkShipType: function(ship) {
    return ship instanceof this._shipType;
  },
};
