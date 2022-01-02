const inquirer = require("inquirer");
// const askQuestions = questions => {
//         return inquirer.prompt(questions);
// }

const askQuestions = questions => {
    return new Promise((resolve, reject) => {
        if (1 === 1) {
            resolve(questions);
        } else {
            reject();
        }
    });
}

module.exports = askQuestions;