// requirements for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const generateMd = require('./utils/generateMarkdown.js');

// Array of questions for user input
 inquirer
   .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your GitHub username? (Required)',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'title',
      message: 'Please input the title for this project. (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('The README requires a project title.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description for this project. (Required)',
      validate: projectBrief => {
        if (projectBrief) {
          return true;
        } else {
          console.log('The README requires a brief description.');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmInstall',
      message: 'Does this project require installation by the user?',
      default: true
    },
    {
      type: 'input',
      name: 'install',
      message: 'Please providethe steps required to install your project.',
      when: ({ confirmInstall }) => confirmInstall
    },
    {
      type: 'confirm',
      name: 'confirmUsage',
      message: 'Do you have instructions for use of this project?',
      default: true
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions for use.',
      when: ({ confirmUsage }) => confirmUsage
    },
    {
      type: 'confirm',
      name: 'confirmContribute',
      message: 'Do you have instructions for potential contributors?',
      default: true
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Please provide contribution guidelines.',
      when: ({ confirmContribute }) => confirmContribute
    },
    {
      type: 'confirm',
      name: 'confirmTest',
      message: 'Do you have instructions for testing of this project?',
      default: true
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please provide instructions for testing.',
      when: ({ confirmTest }) => confirmTest
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Which license is this application covered under?',
      choices: ['MIT', 'GNU GPLv3', 'Mozilla', 'IBM', 'Apache 2.0', 'Unlicense'] 
    }
  ])
  .then (data => {
    const writeFile = `${data.name
      .toLowerCase()
      .split(' ')
      .join('')}.json`;

    fs.writeFile(writeFile, JSON.stringify(data, null, '/t'), err =>
      err ? console.log(err) : console.log('Data written to JSON.')
    );
  });


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init(questions);
