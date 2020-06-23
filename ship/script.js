'use strict';

const ship = new Ship('Sevastopol', 'sailboat');
ship.moveTo(5, 10);
ship.dropAnchor();
ship.riseAnchor();
ship.move('e');
ship.moveTo(20, 30);
console.log(ship._distance);

const dock = new Dock(new Position(20, 30));
dock.moor(ship);
console.log('moor', dock);
dock.unmoor(ship);
console.log('ummoor', dock);
