// TODO: Include packages needed for this application
// Adding a filesystem is handy to use to switch between files. hence the fs.
const fs = require("fs");
// Referred to activity 20 of node.js for this line of code.
// 1. we already have package.json, so now we install the version npm i @8.2.4 like we 
// have been doing in class.Then, we get package-lock.json.
const inquirer = require("inquirer");  


// TODO: Create an array of questions for user input
// Here, I am going to refer back to activities from 09Node.js. Im Just goin to ask questions.
// These are normally questions I have to answer myself for my readmes.
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your project.",    
    },
{
    type:"input",
    name:"description",
    message:"Please provide a short description of the project.",
}
{
    type:"input",
    name:"table of contents",
    message:"If your read me is long, add a table of contents.",
}
{
    type:"input",
    name:"installation",
    message:"What are the steps required to install your project?",
}
{
    type:"input",
    name:"usage",
    message:"Provide instructions and examples for use.",
}
{
    type:"input",
    name:"credits",
    message:"Please provide your collaborators, third party assets, tutorials, or other sources.",
}
{
    type:"input",
    name:"license",
    message:"Please list your license here.",
}
{
    type:"input",
    name:"badges",
    message:"Type badges here.",
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
