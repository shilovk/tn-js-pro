'use strict';

/**
 * @typedef {Object} Ship
 * @param {string} name
 * @param {string} model
 * @param {string} color
 * @param {number} damage
 * @param {Position} position
 */
function Ship(name, model, position = new Position(0, 0), color = 'white', damage = 0) {
  this.name = name;
  this.model = model;
  this.position = position;
  this.color = color;
  this.damage = damage;
  this._distance = 0;
  this._isAnchorDroped = false;
};

Ship.prototype = {
  /**
   * @param {number} x
   * @param {number} y
   */
  moveTo: function(x, y) {
    if (this._isAnchorDroped) throw new Error('Ship must not be anchored');

    const newPosition = new Position(x, y);

    this._distance += newPosition.calcDistanceFrom(this.position);
    this.position = newPosition;

    return true;
  },

  /**
   * @param {'n' | 'w' | 's' | 'e'} direction
   */
  move: function(direction) {
    if (this._isAnchorDroped) throw new Error('Ship must not be anchored');

    let {x, y} = this.position;

    switch (direction) {
      case 'n':
        y++;
        break;
      case 's':
        y--;
        break;
      case 'e':
        x++;
        break;
      case 'w':
        x--;
        break;
    };

    return this.moveTo(x, y);
  },

  getDistance: function() {
    return this._distance;
  },

  isAnchorDroped: function() {
    return this._isAnchorDroped;
  },

  dropAnchor: function() {
    return this._isAnchorDroped = true;
  },

  riseAnchor: function() {
    return this._isAnchorDroped = false;
  },
};
