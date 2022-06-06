const fs = require('fs');
const inquirer = require('inquirer');


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

function renderLicenseLink(license) {
    if (license !== "no license") {
      return `
  [![badge](https://img.shields.io/badge/license-${license}-blue)](http://choosealicense.com/licenses/${license}/)`;
    } else {
      return " ";
    }
};

function renderLicenseSection(license) {
  let licenseString = "";
  switch (license) {
    case "Apache License 2.0":
      licenseString =
        "The project is under [Apache](https://opensource.org/licenses/Apache-2.0) license.";
      break;
    case "GNU GPL v3":
      licenseString =
        "The project is under [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0) license.";
      break;
    case "ISC":
      licenseString =
        "The project is under [ISC](https://opensource.org/licenses/ISC) license.";
      break;
    case "MIT":
      licenseString =
        "The project is under [MIT](https://opensource.org/licenses/MIT) license.";
      break;
    case "no license":
      licenseString =
        "The project is under [no license](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/) license.";
      break;
    case "Mozilla":
      licenseString =
        "This project is under [Mozilla](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;

    default:
      licenseString = "The project has no license retriction.";
      break;
  }
  return licenseString;
    };

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
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}


## Usage
${data.usage}


## License
This project is licensed using the ${data.license} 

${renderLicenseBadge(data.license)}


## Contributing
${data.contributing}


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
};

module.exports = generateMarkdown;
