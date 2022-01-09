// Importing functions
const askQuestions = require("./utils/userInput.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
const makeReadMe = require('./utils/makeReadMe.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your name:");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email address:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your Email address:");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter project title:',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter project title:");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter project description:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter project description:");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your application:',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please provide installation instructions for your application:");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain how to use your application:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please explain how to use your application:");
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license applies to this project? Please check only one box:',
        choices: ['Apache License 2.0', 'Boost', 'BSD 2-Clause', 'BSD 3-Clause', 'CC0', 'EPL', 'GPL v3', 'GPL v2', 'MIT', 'Mozilla Public License 2.0', 'ISC'],
        validate: licenseInput => {
            if (licenseInput.length <= 1) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide guidelines for how others can contribute to this project:',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log("Please provide guidelines for how others can contribute to this project:");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions on how to test your application:',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log("Please instructions on how to test your application:");
                return false;
            }
        }
    }
];

// Function to initialize app
function init() {
   askQuestions(questions)
   .then(data => generateMarkdown(data))
   .then(markdown => makeReadMe(markdown))
   .then(resolve => console.log(resolve.message))
   .catch(err => console.log(err));
}

// Function call to initialize app
init();