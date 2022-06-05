// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your gitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description of your project:",
  },
  {
    type: "input",
    name: "contributing",
    message:
      "What do users need to know about contributing to this repository?",
  },
  {
    type: "input",
    name: "install",
    message: "What command should be run to install dependencies?",
    default:
      "To install dependencies run npm install through the command line.",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    default: "To test the file run npm test through the command line.",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using this repo?",
  },
  {
    type: "list",
    name: "license",
    message: "What license is this project using?",
    choices: [
      "MIT",
      "Apache 2.0",
      "Mozilla Public License",
      "GNU GPL v3",
      "Eclipse",
      "Boost",
      "Perl",
      "SIL",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log("Success! Your README has been generated")
  });
};

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions)
  .then(userInput => {
    return userInput
    }); 
};

// Function call to initialize app
init();
