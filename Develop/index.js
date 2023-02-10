// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./utils/generateMarkdown.js");
const licenses = ["None", "BSD", "GPL", "MIT", "Apache"];
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Title of Project",
    name: "title",
  },
  {
    type: "input",
    message: "Description of Project",
    name: "description",
  },
  {
    type: "input",
    message: "Installation Instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage Information",
    name: "usage",
  },
  {
    type: "input",
    message: "Contribution guidelines",
    name: "guidelines",
  },
  {
    type: "input",
    message: "Test instructions",
    name: "test",
  },
  {
    type: "list",
    message: "Add a License",
    name: "license",
    choices: licenses,
  },
  {
    type: "input",
    message: "Github Username",
    name: "github",
  },
  {
    type: "input",
    message: "Email address",
    name: "email",
  },
];
// TODO: Create a function to write README file
function writeToFile(data) {
  const filename = "README.md";

  fs.writeFile(filename, data, function (err) {
    err ? console.log(err) : console.log(filename + " was created!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => writeToFile(markDown(answers)));
 
}

// Function call to initialize app
init();
