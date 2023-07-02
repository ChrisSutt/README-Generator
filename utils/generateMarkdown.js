// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (!license) {
  return '';
}

let licenseBadge = '';

switch (license.toLowerCase()) {
  case 'mit':
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    break;
  case 'apache 2.0':
    licenseBadge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    break;
  case 'gnu gpl v3':
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    break;
  default:
    licenseBadge = '';
    break;
}

return licenseBadge;
}

function renderLicenseLink(license) {
if (!license) {
  return '';
}

let licenseLink = '';

switch (license.toLowerCase()) {
  case 'mit':
    licenseLink = 'This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).';
    break;
  case 'apache 2.0':
    licenseLink = 'This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).';
    break;
  case 'gnu gpl v3':
    licenseLink = 'This project is licensed under the [GNU GPL v3 License](https://www.gnu.org/licenses/gpl-3.0).';
    break;
  default:
    licenseLink = '';
    break;
}

return licenseLink;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
