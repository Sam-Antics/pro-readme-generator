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
    // If there is no license, return an empty string
  } else {
    return '';
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return `
  [License: MIT](https://opensource.org/licenses/MIT)
    `;
  } else if (license == 'GNU GPLv3') {
    return `
  [License: GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)
    `;
  } else if (license == 'Mozilla') {
    return `
  [License: Mozilla](https://opensource.org/licenses/MPL-2.0)
    `;
  } else if (license == 'IBM') {
    return `
  [License: IBM](https://opensource.org/licenses/IPL-1.0)
    `;
  } else if (license == 'Apache 2.0') {
    return `
  [License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)
    `;
  } else if (license == 'Unlicense') {
    return `
  [License: Unlicense](http://unlicense.org/)
    `;
  } else {
    // If there is no license, return an empty string
    return '';
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if (license == '') {
    return '';
    } else {
    return `
  ## License
   This project is covered under the following:</br>
   ${renderLicenseLink(license)}
    `;
  }
}

// If there is no license information, no ToC link for the missing section
function licenseToc(license) {
  if (license == '') {
    return '';
  } else {
    return `
- [License Information](#license)
    `;
  }
}

/* Functions to return stock informaiton in README if user doesn't want contributors, 
 or if they have no testing instructions */
function contributeSection(confirmContribute, contribute) {
  if (!confirmContribute) {
    return `
  This project is not accepting third-party contributions at this time. Thank you for your interest.
  `;
  } else {
    return `
  ${contribute}
    `;
  }
}

function testSection(confirmTest, test) {
  if (!confirmTest) {
    return `
  There are no instructions for testing at this time.
  `;
  } else {
    return `
  ${test}
    `;
  }
}

// Function to generate markdown for README
function generateMd(mockData) {
  return `# ${mockData.title}
  ${renderLicenseBadge(mockData.license)}

## Table of Contents
- [Project Description](#description)
- [Installation Instructions](#installation)
- [Usage Instructions](#usage)
${licenseToc(mockData.license)}
- [Contributing](#contributing)
- [Testing Information](#tests)
- [Questions and Contact Info](#questions)
     
## Description
${mockData.description}

## Installation
${mockData.install}

## Usage
${mockData.usage}

${renderLicenseSection(mockData.license)}

## Contributing
${contributeSection(mockData.confirmContribute, mockData.contribute)}

## Tests
${testSection(mockData.confirmTest, mockData.test)}

## Questions
If you have questions or comments, I can be reached at the following:</br>
- [GitHub Profle](https://github.com/${mockData.name}) </br>
- [email](${mockData.email})

`;
}

module.exports = generateMd;
