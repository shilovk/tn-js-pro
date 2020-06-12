/**
 * Print node information
 * @param {HTMLNode} node html node
 * @param {number} deep nesting level of node
 */
function printNode(node, deep) {
  if (!node) return;

  const result =
    '  '.repeat(deep) + ' ' +
    node.nodeType + ' ' +
    node.nodeName + ' ' +
    node.nodeValue;
  console.log(result);
}

/**
 * Export information of nodes with all childes
 * @param {HTMLNode[]} nodes html nodes array
 * @param {number} deep nesting level of nodes
 */
function showNodes(nodes, deep = 0) {
  if (nodes.length == 0) return;

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];

    printNode(node, deep);

    if (node.childNodes.length > 0)  showNodes(node.childNodes, deep + 1);
  }
}

/**
 * Export information of node with all childes
 * @param {HTMLNode} parent html parent node
 * @param {number} deep nesting level of node
 */
function showNodesOf(parent, deep = 0) {
  if (!parent || !parent.childNodes) return;

  for (let node = parent.firstChild; node.lastChild; node = node.nextSibling) {
    printNode(node, deep);
    if (node.childNodes.length > 0)  showNodes(node.childNodes, deep + 1);
  }
}

/**
 * Print element information
 * @param {HTMLElement} el html element
 * @param {number} deep nesting level of element
 */
function printElement(el, deep) {
  if (!el) return;

  const result =
    '  '.repeat(deep) + ' ' +
    el.tagName + ' ' +
    el.innerText + ' '
  console.log(result);
}

/**
 * Export information of elements with all children
 * @param {HTMLElement[]} elements html elements array
 * @param {number} deep nesting level of elements
 */
function showElements(elements, deep = 0) {
  if (elements.length == 0) return;

  [...elements].forEach((el) => {
    printElement(el, deep);

    if (el.firstElementChild) showElements(el.children, deep + 1);
  });
}
