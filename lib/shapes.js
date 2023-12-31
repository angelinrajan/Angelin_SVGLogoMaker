
//const triangle = require('./Triangle.js');
//const square = require('./Square.js');
//const circle = require('./Circle.js');

class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
       // this.shape = shape;
        this.shapeColor = shapeColor;

    }
    //render() {
//     return `<svg version="1.1"
//      width="300" height="200"
//      xmlns="http://www.w3.org/2000/svg">


//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

// </svg>`
//}

}


// Triangle class inherits properties defined in Shape class
class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);  
   };
    render() {
      // Returns polygon with color input
      return `<svg version="1.1" 
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
      <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`
};
};
    
  
  
  // Square class inherits properties defined in Shape class
  class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);  
    };
    render() {
      // Returns polygon with color input
      return `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${this.shapeColor}"/>
      <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
    }
  }
  
  // Circle class inherits properties defined in Shape class
  class Circle extends Shapes {
    render() {
      // Returns polygon with color input
      return `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
      <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
    }
  }

module.exports = {Shapes, Triangle, Square, Circle};