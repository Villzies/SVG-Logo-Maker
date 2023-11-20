const Shape = require('./shape.js')

//If a circle is selected in the prompt, renders a circle with specified dimensions and color and text from the questions
class Circle extends Shape {
    constructor(shapeColor, text) {
        super(shapeColor, text);
    };
    render() {
        return  `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="75" r="100" fill="${this.shapeColor}" />
            <text x="125" y="100" font-size="50" text-anchor="middle" fill="none">${this.text}</text>
        </svg>
        `
    };
};

module.exports = Circle;