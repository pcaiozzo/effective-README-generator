// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
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
    message: "Please enter then names of the contributors.",
  },
  {
    type: "input",
    name: "install",
    message: "What command should be run to install the application?",
    default: "npm install",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be used to run a test?",
    default: "npm run test",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using this repo?",
  },
  {
    type: "list",
    name: "license",
    message: "Please select the proper license:",
    choices: [
      "MIT",
      "Apache License 2.0",
      "ISC",
      "Mozilla",
      "GNU GPL v3",
      "no license",
    ],
  },
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(`${fileName}`, data, (err) =>
  err ? console.error(err) : console.log("Success! Your README has been generated!")
);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
      writeToFile("README.md", generateMarkdown(data));
    });
};

// Function call to initialize app
init()