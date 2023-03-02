// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'ISC') {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  } else if (license === 'Apache 2.0') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === 'Mozilla') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  } else {
    return ``;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
      return 'MIT';
  } else if (license === 'ISC') {
      return 'ISC';
   } else if (license === 'Apache 2.0') {
      return 'Apache 2.0';
   } else if (license === 'Mozilla') {
      return 'Mozilla';
   } else {
      return '';
   }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
