const fs = require('fs');
const inquirer = require('inquirer');

// Validate user input otherwise throw error and return to question
function validateInput(value) {
    if(value !="") {
        return true
    } else {
        return "Please enter a valid input";
    }
}

// inquirer prompt
const question = [
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
]