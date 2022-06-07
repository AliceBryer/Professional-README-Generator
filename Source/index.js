const fs = require('fs').promises;
const inquirer = require("inquirer");

async function getUserInput () {

    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a short description of your project",
        },
        {
            type: "input",
            name: "installation",
            message: "How can your project be installed?",
        },
        {
            type: "input",
            name: "usage",
            message: "Does your project have any usage information?",
        },
        {
            type: "input",
            name: "features",
            message: "What features do you have in your project?",
        },
        {
            type: "checkbox",
            message: "Please select a license from the options below - If you need help chooseing a licence , please refer to www.choosealicence.com ",
            name: "licence",
            choices: ['MIT','GNU GPLv3','Apache','GPLv2','BSD 3-Clause']
        },
        {
            type: "input",
            name: "contribution",
            message: "Please enteryour project contribution guidelines",
        },
        {
            type: "input",
            name: "tests",
            message: "Please enter your project test instructions",
        },
        {
            type: "input",
            name: "credits",
            message: "Please list any collaborators or third-party assets used",
        },
        {
            type: "input",
            name: "questions",
            message: "Please enter your github username",
        },
        {
            type: "input",
            name: "questions",
            message: "Please enter your email address",
        },
       
    ]);
}


let file = await fs.readFile(")

Object.keys(answers).forEach(key) => {

}

getUserInput();