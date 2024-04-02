// pulls required items from the shape.js for use in the logo creation
const { Circle, Square, Triangle } = require("./shape");
// pull required item from svg.js
const SVG = require('./svg');

// function to write the SVG file using user input from the index.js prompts
function generateLogo(data) {
    // Conditional Checks to set the logo shape
    let userShape;
    if (data.shape === 'Circle') {
        userShape = new Circle();
        console.log("You chose a circle background");

    } else if (data.shape === 'Square') {
        userShape = new Square();
        console.log("You chose a square background");

    } else {
        userShape = new Triangle();
        console.log("You chose a triangle background");
    }
    userShape.setColor(data.color);

    // Creates a new instance using the SVG object from svg.js
    const svg = new SVG()

    // Using this to set the text and color
    svg.setText(data.text, data.textColor)
    
    // Sets the shape from the conditional statement
    svg.setShape(userShape)

    // renders the logo with the inputs
    return svg.render()
}

module.exports = generateLogo;