const Shape = require('./shape.js')

//If a triangle is selected in the prompt, renders a triangle with specified dimensions and color and text from the questions
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return  `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <triangle cx="100" cy="75" r="100" fill="${this.shapeColor}" />
            <text x="125" y="100" font-size="50" text-anchor="middle" fill="none">${this.text}</text>
        </svg>
        `
    };
};

module.exports = Triangle;