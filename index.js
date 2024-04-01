// Packages needed for the application
const fs = require('fs');
const inquirer = require('inquirer');
// will run the logo generator from the library 
const generateShape = require('./lib/shape.js');

// Validate user input otherwise throw error and return to question
function validateInput(value) {
    if(value !="") {
        return true
    } else {
        return "Please enter a valid input";
    }
}

// inquirer prompt
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape to start with',
        choices: [
            "Circle",
            "Square",
            "Triangle",
        ],
        validate: validateInput,
    },
    {
        type: 'input',
        name: 'color',
        message: "Please enter a color or hexadecimal number your shape color",
        validate: validateInput,
    },
    {
        type: 'input',
        name: 'text',
        message: "Please enter 3 characters for your logo",
        validate: validateInput,
    },
    {
        type: 'input',
        name: 'textColor',
        message: "Please enter a color or hexidecimal number for your text color",
    },
];
//function to initalize the beginning of the question
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
    });
}

// call the function to initalize the beginning of the application
init();