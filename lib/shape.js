// Class to define shape, extend into this 
class Shape{
    constructor() {
        this.color = "";
    }
    // Will set color based of user input 
    setColor(userColor) {
        this.color = userColor;
    }
}

// Circle class inherits properties from the Shapes class (basically the color)
class Circle extends Shape {
    render() {
        // sets the properties to create the circle and set color
        return `<circle cx="150" cy="100" r="80" style="fill:${this.color}" />`;
    }
}

// Square class inherits properties from the Shapes class
class Square extends Shape {
    render() {
        // Sets the properties to create a square (make sure width and heigth are the same otherwise its not a square) and set color
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

// Triangle class inherits properties from the Shapes class
class Triangle extends Shape {
    render() {
        //
        return `<polygon points="150, 19 244, 192 56, 102" fill="${this.color}" />`;
    }
}

// Export relevent shapes to the index.js file
module.exports = { Circle, Square, Triangle };