const { Shapes, Triangle, Square, Circle } = require('./shapes.js');

// A testing suite for Arithmetic is created.
describe('Triangle', () => {
  // A test is created to check that sum does in fact return the two numbers added together.

  it('should validate that it is a triangle', () => {
    const shapetri = new Triangle();
    expect(shapetri.render()).toEqual(`<svg version="1.1" 
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
      <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`);
  });
});

describe('Square', () => {
  it('should validate that it is a Square', () => {
    const shapesq = new Square();
    expect(shapesq.render()).toEqual(`<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${this.shapeColor}"/>
      <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`);
  });
});

describe('Circle', () => {
  it('should validate that it is a Circle', () => {
    const shapecr = new Circle();
    expect(shapecr.render()).toEqual(`<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
      <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`);
  });
});
//const shape = new Triangle();

//expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');