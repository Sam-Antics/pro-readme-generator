// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return `
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
    `;
  } else if (license == 'GNU GPLv3') {
    return `
  ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)
    `;
  } else if (license == 'Mozilla') {
    return `
  ![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)
    `;
  } else if (license == 'IBM') {
    return `
  ![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)
    `;
  } else if (license == 'Apache 2.0') {
    return `
  ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
    `;
  } else if (license == 'Unlicense') {
    return `
  ![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)
    `;
  } else {
    return ''
  };
}
// If there is no license, return an empty string

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMd(mockData) {
  return `# ${mockData.title}
  ${renderLicenseBadge(mockData.license)}

## Table of Contents
1. [Project Description](#description)
2. [Installation Instructions](#installation)
3. [Usage Instructions](#usage)
4. [License Information](#license)
5. [Contributing](#contributing)
6. [Testing Information](#tests)
7. [Questions and Contact Info](#questions)
     
## Description
${mockData.description}

## Installation
${mockData.install}

## Usage
${mockData.usage}

## License

## Contributing
${mockData.contribute}

## Tests
${mockData.test}

## Questions
If you have questions or comments, I can be reached in the following manner:</br>
- [GitHub Profle](https://github.com/${mockData.name}) </br>
- [email](${mockData.email})

`;
}

module.exports = generateMd;
