class Input extends HtmlElement {
  constructor() {
    super();
  }

  onInput(fn) {
     this.el.onkeyup = fn;
  }

  onFocus(fn) {
    this.el.onfocus = fn;
  }
}
