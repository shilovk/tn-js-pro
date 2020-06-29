'use strict';

const ship = new Ship('Potemkin');
ship.moveTo(5, 10);
ship.dropAnchor();
ship.riseAnchor();
ship.move('e');
ship.moveTo(20, 30);
console.trace(ship._distance);

const dock = new Dock(new Position(20, 30));
dock.moor(ship);
console.trace('moor', [...dock.ships]);
dock.unmoor(ship);
console.trace('ummoor', [...dock.ships]);

const motorShip = new MotorShip('Zlatoust');
console.trace(motorShip);
const sailingShip = new SailingShip('Sevastopol');
console.trace(sailingShip);

const motorDock = new MotorDock(new Position(1, 2));
console.trace(motorDock);
const sailingDock = new SailingDock();
console.trace(sailingDock);

motorShip.damage = 50;
console.trace(motorShip.moveTo(motorDock.position.x, motorDock.position.y));
console.trace(motorDock.moor(motorShip));
console.trace(motorDock.paint(motorShip, 'gray'));
console.trace(motorDock.repair(motorShip));
console.trace(motorDock.change(motorShip));

console.trace(sailingShip.moveTo(motorDock.position.x, motorDock.position.y));
console.trace(motorDock.moor(sailingShip));
