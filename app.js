// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your github username?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter a username to continue";
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter an email to continue";
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is your projects name?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter a title to continue";
        }
      },
    },
    {
      type: "input",
      name: "desc",
      message: "Please write a short description of your project",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter a description to continue";
        }
      },
    },
    {
      type: "checkbox",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
  ]);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  promptUser();
  //   generateMarkdown(data);
}

// Function call to initialize app
init();
