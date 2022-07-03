// requirements for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMd = require('./utils/generateMarkdown.js');

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
      name: 'email',
      message: 'What is your email address? (Required)',
      validate: userEmail => {
        if (userEmail) {
          return true;
        } else {
          console.log('Please enter a contact email.');
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
      type: 'input',
      name: 'install',
      message: 'Please provide the steps required to install your project. (Required)',
      validate: projectInstall => {
        if (projectInstall) {
          return true;
        } else {
          console.log('The README requires installation instructions.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions and examples for use.',
      validate: projectUsage => {
        if (projectUsage) {
          return true;
        } else {
          console.log('The README requires usage information.');
          return false;
        }
      }
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
      type: 'list',
      name: 'license',
      message: 'Which license is this application covered under?',
      choices: ['MIT', 'GNU GPLv3', 'Mozilla', 'IBM', 'Apache 2.0', 'Unlicense'] 
    }
  ])
  // back to writing a JSON object because I've changed some of the prompts
  .then (data => {
    const writeFile = `${data.name
      .toLowerCase()
      .split(' ')
      .join('')}.json`

      fs.writeFile(writeFile, JSON.stringify(data, null, '\t'), err =>
        err ? console.log(err) : console.log('Data written to JSON.')
        );
    });



// // Function to write README file
// const writeFile = fileContent => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('./dist/index.html', fileContent, err => {
//       // if there's an error, reject the Promise and send the error to the Promise's 'catch()' method
//       if (err) {
//         reject(err);
//         // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//         return;
//        }

//       // if everything went well, resolve the Promise and send the successful data to the '.then()' method
//         resolve({
//             ok: true,
//             message: 'Your README file has been created.'
//        });
//     }); 
//   });
// };

// // TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
