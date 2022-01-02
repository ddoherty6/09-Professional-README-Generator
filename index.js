// Importing functions
const askQuestions = require("./utils/userInput.js");

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your application:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain how to use your application:'
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
        message: 'Please provide guidelines for how others can contribute to this project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please instructions on how to test your application:'
    }
];

const mockData = 
    {
        name: 'Dan Doherty',
        github: 'ddoherty6',
        title: 'Professional README Generator',
        description: 'It asks questions to the user and then builds a Professional README automatically from the users input',
        installation: 'You have to say npm install',
        usage: 'Answer the questions with as much information as you can muster to your hearts most sincerest intent',
        License: [ 'MIT' ],
        contributing: 'Email me you name, number, date of birth, and social. Then I will send you a form to sign, verifying that I can sell your information on the dark web. At that point, I will give you limited access to the repo and boss you around like Im better than you for all eternity.',
        tests: "Run a basic premise test where you fill in multiple forms multiple times and see how the thing reacts and how it all comes out."
      };



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
   //askQuestions(questions)
   askQuestions(mockData)
   .then(data => console.log(data));
}

// Function call to initialize app
init();
