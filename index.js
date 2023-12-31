// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
      message: 'Enter the project license:[MIT], [Apache 2.0], [gnu gpl v3]',
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

  //function to write to the file creating the README.md
  function writeToFile(fileName, data) {
    const content = generateMarkdown(data);
    fs.writeFile(fileName, content, (err) => {
      if (err) {
        console.error('An error occurred while writing the file:', err);
      } else {
        console.log('README file has been successfully generated!');
      }
    });
  }
  
  // Function to initiaite the application
  function init() {
    inquirer.prompt(questions).then((answers) => {
      writeToFile('Sample-README.md', answers);
    });
  }
  
  init();
