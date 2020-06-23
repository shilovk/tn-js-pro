/**
 * @typedef {Object} Position
 * @param {number} x
 * @param {number} y
 */
function Position(x, y) {
  this.x = x;
  this.y = y;

  this.equalXY = function({x, y}) {
   return this.x == x && this.y === y;
  }
}
