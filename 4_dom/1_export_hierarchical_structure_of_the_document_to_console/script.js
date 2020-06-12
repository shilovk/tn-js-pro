function printNode(node, deep) {
  if (!node) return;

  const result =
    '  '.repeat(deep) + ' ' +
    node.nodeType + ' ' +
    node.nodeName + ' ' +
    node.nodeValue;
  console.log(result);
}

function showNodes(nodes, deep = 0) {
  if (nodes.length == 0) return;

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];

    printNode(node, deep);

    if (node.childNodes.length > 0)  showNodes(node.childNodes, deep + 1);
  }
}

function showNodesOf(parent, deep = 0) {
  if (!parent || !parent.childNodes) return;

  for (let node = parent.firstChild; node.lastChild; node = node.nextSibling) {
    printNode(node, deep);
    if (node.childNodes.length > 0)  showNodes(node.childNodes, deep + 1);
  }
}

function printElement(el, deep) {
  if (!el) return;

  const result =
    '  '.repeat(deep) + ' ' +
    el.tagName + ' ' +
    el.innerText + ' '
  console.log(result);
}

function showElements(elements, deep = 0) {
  if (elements.length == 0) return;

  [...elements].forEach((el) => {
    printElement(el, deep);

    if (el.firstElementChild) showElements(el.children, deep + 1);
  });
}
