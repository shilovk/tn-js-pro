/**
 * @typedef {Object} Position
 * @param {number} x
 * @param {number} y
 */
function Position(x, y) {
  this.x = x;
  this.y = y;

  /**
   * @param {Object} {x, y}
   */
  this.equalXY = function({x, y}) {
   return this.x === x && this.y === y;
 };

 /**
  * @param {Position} oldPosition
  * @param {Position} newPosition
  */
 this.calcDistanceFrom = function (oldPosition) {
   const {x: oldX, y: oldY} = oldPosition;

   return Math.sqrt(Math.pow(this.x - oldX, 2) + Math.pow(this.y - oldY, 2));
 };
};
