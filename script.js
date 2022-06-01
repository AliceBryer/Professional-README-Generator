const fs = require('fs').promises;
const inquirer = require("inquirer");

async function getUserInput () {

    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            messge: "What is the name of your project?",
        },
    ]);
}

getUserInput();