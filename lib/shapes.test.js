const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

const triangle = new Triangle();
triangle.setColor("blue");
expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const circle = new Circle();
circle.setColor("red");
expect(circle.render()).toEqual('<circle cx="25 cy="75" r"20" fill="red" />')

const square = new Square();
square.setColor("orange");
expect(square.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="orange" />');