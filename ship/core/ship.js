'use strict';

/**
 * @typedef {Object} Ship
 * @param {string} name
 * @param {string} model
 * @param {Position} position
 */
function Ship(name, model, position = new Position(0, 0)) {
  this.name = name;
  this.model = model;
  this.position = position;
  this._distance = 0;
  this._isAnchorDroped = false;

  /**
   * @param {number} x
   * @param {number} y
   */
  this.moveTo = function (x, y) {
    const newPosition = new Position(x, y);

    if (this._isAnchorDroped) throw new Error('Ship must not be anchored');

    this._distance += this._calcDistance(this.position, newPosition);
    this.position = newPosition;

    return true;
  };

  /**
   * @param {'n' | 'w' | 's' | 'e'} direction
   */
  this.move = function (direction) {
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
    }

    return this.moveTo(x, y);
  }

  this.getDistance = function () {
    return this._distance;
  }

  this.isAnchorDroped = function () {
    return this._isAnchorDroped;
  };

  this.dropAnchor = () => {
    return this._isAnchorDroped = true;
  };

  this.riseAnchor = () => {
    return this._isAnchorDroped = false;
  };

  /**
   * @param {Position} oldPosition
   * @param {Position} newPosition
   */
  this._calcDistance = function (oldPosition, newPosition) {
    const {x: x1, y: y1} = oldPosition;
    const {x: x2, y: y2} = newPosition;

    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }
}
