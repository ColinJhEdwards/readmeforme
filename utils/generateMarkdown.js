// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.username}/${data.title}
  # Description
  ${data.desc}
  # Table of Contents
  * [Installation](#installation)
  * [Tests](#tests)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)
  # Installation
  The following the following command(s) should be run to install the necessary dependencies: ${
    data.install
  }
  # Tests
  The following is needed to run tests: ${data.tests}
  # Usage
  In order to use this app, ${data.user}
  # Contributing
  Information regarding contributing to the repository: ${data.contrib}
  # License
  This project is licensed under the ${renderLicenseBadge(
    data.license
  )} license.
  # Questions
  Any questions or issues can be directed to: ${data.email}
  `;
}

module.exports = generateMarkdown;
