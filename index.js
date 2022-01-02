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
        name: 'License',
        message: 'Which license applies to this project?',
        choices: ['Apache License 2.0', 'FreeBSD', 'GPL', 'LGPL', 'MIT', 'Mozilla Public License 2.0', 'ISC']
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
        message: 'Please instructions on how to test your application:',
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

const mockData = 
    {
        name: 'Dan Doherty',
        github: 'ddoherty6',
        email: 'ddoherty6@gmail.com',
        title: 'Professional README Generator',
        description: 'It asks questions to the user and then builds a Professional README automatically from the users input',
        installation: 'You have to say npm install',
        usage: 'Answer the questions with as much information as you can muster to your hearts most sincerest intent',
        license: [ 'MIT' ],
        contributing: 'Email me you name, number, date of birth, and social. Then I will send you a form to sign, verifying that I can sell your information on the dark web. At that point, I will give you limited access to the repo and boss you around like Im better than you for all eternity.',
        tests: "Run a basic premise test where you fill in multiple forms multiple times and see how the thing reacts and how it all comes out."
      };



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
   //askQuestions(questions)
   askQuestions(mockData)
   .then(data => generateMarkdown(data))
   .then(markdown => makeReadMe(markdown))
   .then(resolve => console.log(resolve))
   .catch(err => console.log(err));
}

// Function call to initialize app
init();



// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba