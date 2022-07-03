// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMd(mockData) {
  return `# ${mockData.title}

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
