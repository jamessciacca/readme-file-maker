// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        //prompt for project title
        type: 'input',
        message: 'Enter the title of your project: ',
        name: 'title',
    },


    {
        //prompt for project description
        type: 'input',
        message: 'Enter a description of your application: ',
        name: 'description',
    },


    {
        //prompt for project instructions
        type: 'input',
        message: 'Enter installation instructions for your application: ',
        name: 'installation',
    },


    {
        //prompt for project usage
        type: 'input',
        message: 'Enter usage information for your application: ',
        name: 'usage',
    },


    {
        //prompt for project license
        type: 'list',
        message: 'Select a license for your application!',
        name: 'license',
        //creating choices for the license type
        choices: [
            'GNU General Public License v3.0',
            'MIT', 
            'CCO 1.0',
            'EPL 1.0', 
            'None']
    },


    {
        //prompt for project contributions
        type: 'input',
        message: 'Enter any contributions made on your application: ',
        name: 'contributions'
    },

    {
        //prompt for project tests
        type: 'input',
        message: 'Enter any tests made on your application: ',
        name: 'tests'
    },


    {
        //prompt for users github
        type: 'input',
        message: 'Enter your GitHub username: ',
        name: 'github'
    },


    {
        //prompt for project tests
        type: 'input',
        message: 'Enter your email address: ',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var content = generateMarkdown(data);
    fs.writeFile(fileName, content, function(error){
        if(error){
            return console.log(error);
        }
        console.log('README was Created!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeToFile(fileName, data)
    })
}

// Function call to initialize app
init();
