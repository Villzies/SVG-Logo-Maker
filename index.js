//Dependencies
const inquirer = require('inquirer');
const questions = require('./lib/questions.js');
const fileName = "./examples/logo.svg";
const fs = require('fs');
const setShape = require('./lib/setShape.js')

//Creates the logo.svg file
function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

//Code for initializing and running inquirer
function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        createLogo(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init();