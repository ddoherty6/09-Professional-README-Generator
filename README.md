# Professional README Generator

This application creates a high-quality README for your app! This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions. You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.

## Installation

The application depends on node.js. Make sure you have node.js installed before continuing.

Clone this GitHub repository to a directory. From there, at the root of the directory run the following:

```
npm install
```

Required dependencies are logged for npm to install, so this command is all you need to get started!

## Usage

To use, run the following command:

```
node index.js
```

A few notes:

- You must enter information for every field. The application will continue to prompt you for information until something is entered, with the following exception:
    - When selecting a license, you may choose no selections or only one. If you choose multiple selections, the prompt will reset until one or zero license are chosen.
- When the application finishes prompting you, it will give you confirmation of successful generation of your new file, README.md - navigate to the /dist/ directory to find this file
- If you decide to run the application again, the file /dist/README.md will be destructively overwritten. Please make sure to save it in a different directory if you wish to keep it.

Please see the following video demonstration:



## Development

Development was compartmentalized into 3 modules, with a fourth, index.js, written with the questions and then the init function to run the promise chain that drives the application. userInput.js just includes the implementation of inquirer. makeReadMe.js simply takes the markdown generated elsewhere and writes it to a file. generateMarkdown.js does the heavy lifting, actually creating the markdown to be written to the README.md file using template literals.

I used links created by GutHib user lukas-h to procedurally generate the license badges in the generated file. Please find that repo [here](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

