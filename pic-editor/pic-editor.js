'use strict';

const COLORS = [
  'red',
  'blue',
  'white',
  'black',
  'pink',
  'orange',
  'yellow',
  'green',
  'gold',
  'gray',
  'cyan',
  'navy',
  'violet',
  'brown',
  'silver',
  'fuchsia',
  'tomato',
  'royalblue',
  'greenyellow',
  'rosybrown',
  'lightgreen'
];

function createEditor(picEditorId, cellSize) {
  const canvasEl = document.querySelector(`#${picEditorId} #canvas`)
  const paletteEl = document.querySelector(`#${picEditorId} #palette`);
  const allColorsEl = document.querySelector(`#${picEditorId} #palette #all-colors`);
  const activeColorEl = document.querySelector(`#${picEditorId} #palette #active-color`);

  if (!canvasEl || !paletteEl || !allColorsEl || !activeColorEl) return;

  createCellsFor(canvasEl, cellSize, activeColorEl);
  createColorsFor(allColorsEl, activeColorEl);
  dragElement(paletteEl);
};

function createCellsFor(canvasEl, cellSize, activeColorEl) {
  const countX = Math.ceil(window.innerWidth / cellSize);
  const countY = Math.ceil(window.innerHeight / cellSize);

  Array.from(Array(countY)).forEach(() => {
    const row = document.createElement('tr');
    new Array(countX).fill('').forEach(() => {
      const cell = document.createElement('td');
      const content = document.createElement('div');
      cell.append(content);
      cell.addEventListener('click', () => {
        cell.style.backgroundColor = activeColorEl.dataset.color;
        if (event.shiftKey) cell.style.backgroundColor = 'white';
      });
      row.append(cell);
    });
    canvasEl.append(row);
  });
};

function createColorsFor(allColorsEl, activeColorEl, colors = COLORS) {
  colors.forEach(c => {
    const color = document.createElement('div');
    color.dataset.color = c;
    color.style.backgroundColor = c;
    allColorsEl.append(color);
  });
  allColorsEl.addEventListener('click', (event) => {
    const el = event.target;
    activeColorEl.style.backgroundColor = el.dataset.color;
    activeColorEl.dataset.color = el.dataset.color;
  });
};
