// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license === 'GNU General Public License v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license === 'CCO 1.0') {
    return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
  }
  if (license === 'EPL 1.0') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  }
  if (license === 'None') {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)'
  }
  if (license === 'GNU General Public License v3.0') {
    return '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license === 'CCO 1.0') {
    return '[CCO 1.0](http://creativecommons.org/publicdomain/zero/1.0/)'
  }
  if (license === 'EPL 1.0') {
    return '[EPL 1.0](https://opensource.org/licenses/EPL-1.0)'
  }
  if (license === 'None') {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  }

  return ` ## **License**
  License: ${license}

  For more information on the license above, please go to [https://www.choosealicense.com/](https://www.choosealicense.com/).

  ---`
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ---
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-green)
  ## Description
  ${data.description}
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  ## Installation
  To install the necessary dependencies, run the following command:
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License 
  This project is licensed under the ${data.license} license.
  ## Contributing
  ${data.contribution}
  ## Tests
  To run tests, run the following command:
  ${data.tests}
  ## Questions
  If you have any questions about this repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.username}](https://www.github.com/${data.username}).
`;
}
module.exports = generateMarkdown;
