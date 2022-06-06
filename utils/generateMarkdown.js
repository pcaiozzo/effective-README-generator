const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ``;
  switch (license) {
    case "Apache License 2.0":
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;

    case "MIT":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;

    case "ISC":
      badge =
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;

    case "GNU GPL v3":
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;

    case "Mozilla":
      badge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;

    default:
      badge = "";
      break;
  };
  return badge
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

## Description
${data.description}


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Badges](#badges)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}


## Usage
${data.usage}


## License
This project is licensed using the ${renderLicenseBadge(data.license)} license. 


## Badges
${data.badges}


## Contribute
${data.contribute}


## Tests
${data.tests}

## Questions
If you have any questions, contact me!

- GitHub: [GitHub!](https://github.com/${data.github})
- Email:  ${data.email}


`;

fs.writeFile("./README.md", output, (err) => {
  if (err) throw err;
});
}

module.exports = generateMarkdown;
