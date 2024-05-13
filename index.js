//setting up const require variables for inquirer, fs, generateREADME, and path
const inquirer = require('inquirer');
const fs = require('fs');  
const generateREADME = require("./utils/readme");
const path = require("path");

//inquirer questions that will promt the user to input answers in the command line
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name',
    },
    {
      type: 'input',
      name: 'project',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project',
    },
    {
      type: 'list',
      name: 'licenses',
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependancies?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to run tests?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'What does the user need to know about contributing to the repo?',
    },

    //this will generate the response in the command line once the user answers all required prompts
  ]).then((response) => {
    const readmeContent = generateREADME(response)
    console.log(readmeContent)

    //this will write the README file and give you a completed message
    fs.writeFile('README.md', readmeContent, function(err){
      if (err){
        console.log('error', err)
      } else {
        console.log('created file')
      }
    })
  })