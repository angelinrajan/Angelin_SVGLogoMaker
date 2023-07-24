const inquirer = require('inquirer');
const fs = require('fs');
//const Shapes = require('./lib/shapes.js');
const {Triangle, Square, Circle} = require('./lib/shapes.js');


const questions = [
    //function userInput() {
    //inquirer
    //.prompt([
    // Text prompt
    {
        type: "input",
        message: "Text for your Logo? (Enter up to three characters)",
        name: "logotext",
        validate: function (characterlength) {
            if (characterlength.length > 3) {
                console.log("\nYour logo must have 3 or fewer characters in it. Please try again.\n");
                return false;
            } else {
                return true;
            }
        }
    },
    // Text color prompt
    {
        type: "input",
        message: "Text color?",
        name: "textColor",
    },
    // Shape choice prompt
    {
        type: "list",
        message: "Select a Logo Shape from options below:",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
    },
    // Shape color prompt
    {
        type: "input",
        message: "Color for your Logo?",
        name: "shapeColor",
    },
];

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')

    );
};

// function for svg file creation
function svgFile() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data)

            if (data.shape === 'Triangle') {
                const triangle = new Triangle(data.logotext, data.textColor, data.shapeColor)
                writeToFile('Logo.svg', triangle.render());
                //triangle.render()
            }
            // const logo = shape.render()
            // console.log(logo)
            //writeToFile('Logo.svg', triangle.render());
            if (data.shape === 'Square') {
                const square = new Square(data.logotext, data.textColor, data.shapeColor)
                writeToFile('Logo.svg', square.render());
          
            }
            if (data.shape === 'Circle') {
                const circle = new Circle(data.logotext, data.textColor, data.shapeColor)
                writeToFile('Logo.svg', circle.render());
           
            }
        }
        )
}

// Calling promptUser function so inquirer prompts fire off when application is ran
svgFile();