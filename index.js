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
            message: "What is the purpose of your project?",
        },
        {
            type: "input",
            name: "features",
            message: "What features do you have in your project?",
        },
        {
            type: "checkbox",
            message: "What licence would you need for your project? If you need help chooseing a licence , please refer to www.choosealicence.com ",
            name: "licence",
            choices: ['MIT','GNU GPLv3','Apache','GPLv2','BSD 3-Clause']
        },
        {
            type: "input",
            name: "contribution",
            message: "How can others contribute to your project?",
        },
        {
            type: "input",
            name: "tests",
            message: "Add some tests for users so they can test your application",
        },
        {
            type: "input",
            name: "credits",
            message: "Please list any collaborators or third-party assets",
        },
       
    ]);
}

getUserInput();