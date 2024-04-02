// pulls required items from the shape.js for use in the logo creation
const { Circle, Square, Triangle } = require("./shape");

// function to write the SVG file using user input from the index.js prompts
function generateLogo(data) {

    // define and set blank string for file (will be user 3 letters for logo)
    let svgString = "";

    // Creates and sets dimensions for the logo container
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += `${data.shape}`;

    // Conditional Checks to set the logo shape
    let userShape;
    if (data.shape === 'Circle') {
        userShape = new Circle();

    } else if (data.shape === 'Square') {
        userShape = new Square();

    } else {
        userShape = new Triangle();
    }
}

module.exports = generateLogo;