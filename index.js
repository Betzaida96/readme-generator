const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({}) => {

}

inquirer
.prompt([
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
    name: 'project',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
  },
  {
    type: 'list',
    name: 'licenses',
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None" ],
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
  
  
]).then((response)=>{
    const readmeContent= generateREADME (response)
    console.log(readmeContent)

    fs.writeFile('README.md', readmeContent, err=>err?console.error(err):console.log("Completed!"))
})