// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter the usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter the contributing guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter the test instructions:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter the project license:',
    },
    {
      type: 'input',
      name: 'author',
      message: 'Enter the author name:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the author email:',
    },
  ];
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = generateReadme(data);
    fs.writeFile(fileName, content, (err) => {
      if (err) {
        console.error('An error occurred while writing the file:', err);
      } else {
        console.log('README file has been successfully generated!');
      }
    });
  }
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
