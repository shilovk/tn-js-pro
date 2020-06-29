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
    if (!!this.ships.find(s => ship === s)) {
      throw new Error('Ship is already in the Dock');
    };

    if (!this._isShipSupported(ship)) {
      throw new Error(`Ship is not supported for this Dock`);
    };

    if (!this.position.equalXY(ship.position)) {
      throw new Error('Ship should be moved to the Dock');
    };

    ship.dropAnchor();
    return this.ships.push(ship);
  },

  /**
   * @param {Ship} ship
  */
  unmoor: function(ship) {
    this._isShipInDock(ship);

    ship.riseAnchor();
    return this.ships.splice(this.ships.indexOf(ship), 1);
  },

  /**
   * @param {Ship} ship
   */
  repair: function(ship) {
    this._isShipInDock(ship);

    return ship.damage = 0;
  },

  /**
   * @param {Ship} ship
   * @param {string} color
   */
  paint: function(ship, color) {
    this._isShipInDock(ship);

    if (!color || typeof color !== 'string') {
      throw new Error('Color is not correct');
    };

    return ship.color = color;
  },

  /**
   * @param {Ship} ship
   */
  change: function(ship) {
    this._isShipInDock(ship);

    return new Ship(ship.name, ship.model, ship.position, ship.color, 0);
  },

  /**
   * @param {Ship} ship
   */
  _isShipSupported: function(ship) {
    return ship instanceof this._shipType;
  },

  /**
   * @param {Ship} ship
   */
  _isShipInDock: function(ship) {
    if (!this.ships.find(s => ship === s)) {
      throw new Error('Ship is not in Dock');
    };

    return true;
  }
};
