const someElement = new Div();

someElement.template = `<div>{{output}}</div>`;
someElement.variables = {
	output: 'Some text'
};
someElement.styles = {
	color: 'red'
};

someElement.render();

someElement.onClick = () => {
	console.log('Click')
};

someElement.styles = {
	color: 'blue'
};

someElement.unrender();


const someElement2 = new Input();
someElement2.template = "<input type='text' value={{defaultValue}} />";
someElement2.variables = {
    defaultValue: '123'
}
someElement.styles = {
	color: 'red'
};

someElement2.render();

someElement.styles = {
	color: 'blue'
};

someElement2.onInput(function() { console.log('Input') });
someElement2.onFocus(function() { console.log('Focus') });
