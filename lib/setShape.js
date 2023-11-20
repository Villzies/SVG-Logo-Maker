const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');


//Checks the user response for the specified shape, then sets the shape's color and text
function setShape(response) {

    if (response.shape === 'Circle') {
        let userShape = new Circle (response.shapeColor, response.text)
        return userShape.render()
    }

    if (response.shape === 'Square') {
        let userShape = new Square (response.shapeColor, response.text)
        return userShape.render()
    }

    if (response.shape === 'Triangle') {
        let userShape = new Triangle (response.shapeColor, response.text)
        return userShape.render()
    }
};

module.exports = setShape;