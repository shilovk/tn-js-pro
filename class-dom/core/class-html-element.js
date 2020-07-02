class HtmlElement {
  constructor(newTarget = document.body) {
    this._target = newTarget;
  }

  set template(newTemplate = '') {
    this._template = newTemplate;
    this._parseTemplate();
  }

  _parseTemplate() {
    this._templateEl = new DOMParser().parseFromString(this._template, 'text/html').body.children[0];
  }

  get el() {
    return this._templateEl;
  }

  get template() {
    return this._template;
  }

  set variables(newVariables) {
    if (!newVariables || typeof newVariables !== 'object') {
      throw new Error('Variables is not correct');
    };

    const setVariable = (memo, variable) => {
      let value = newVariables[variable];

      if (!(typeof value === 'function' || typeof value === 'string')) {
        throw new Error(`Value ${value} of ${variable} is not string or function`);
      };

      if (typeof value === 'function') {
        value = value.call();
      };

      this._template = this._template.replace(new RegExp(`{{${variable}}}`, 'g'), value);
    };

    Object.keys(newVariables).reduce(setVariable, '');
    this._parseTemplate();
  }

  set target(newTarget) {
    if (!(newTarget instanceof HTMLElement)) {
      throw new Error('Target is not correct DOM-Element');
    };

    this._target = newTarget;
  }

  set styles(newStyles) {
    if (!(newStyles instanceof Object)) {
      throw new Error('Style is not correct object')
    };

    for (const style in newStyles) {
      this._templateEl.style[style] = newStyles[style];
    };

    this._parseTemplate();
  }

  _render() {
    if (this._templateEl) {
      this._target.append(this._templateEl);
    };
  }

  render() {
    return this._render();
  }

  _unrender() {
    if (this._templateEl) {
      this._templateEl.remove();
    };
  }

  unrender() {
    return this._unrender();
  }
};
