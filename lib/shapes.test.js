//const Circle = require('./circle.js');
//const Triangle = require('./triangle.js')

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');