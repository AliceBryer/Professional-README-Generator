//  packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');

//  array of questions for the user input
const promptUser = () => {

    return inquirer.prompt ([
  
{
    type: "input",
    name: "title",
    message: "What is the title of your project/application?",
},
{
    type: "input",
    name: "description",
    message: "Please provide a description of your project",
},
{
    type: "input",
    name: "installation",
    message: "How can your project be installed by the user?",
},
{
    type: "input",
    name: "usage",
    message: "What information does the user need to know to use your application?",
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
    message: "Please enter your project contribution guidelines",
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
    name: "email",
    message: "Please enter your email address",
},
    ]);
};


const generateREADMe = ({title, description, installation, usage, features, licence, contribution, tests, credits, questions, email}) => 
`# ${title} 
${licence}

## Description

${description}

## Table of Contents

| Section| About that section |
|----------- | ----------- |
|[Description](#description)| More information about the application |
|[Features](#features)| Find out what features this application has |
|[Installation](#installation)| Instructions on how to install the application  |
  [Usage](#usage)| Find out how you can start using the application |
  [License](#license)| Find out how you can start using the application |
  [Contribution](#contributing)| Find out how you can contribute to the project |
[Tests](#tests)| Find out what tests you can run to ensure its working correctly |
[Credits](#credits)| XXXXXXXXXXXXXXx |
[Questions](#questions)| How you can get in touch if you have any questions

## Features
${features}

## Installation

${installation}

## Usage

${usage}

## License 
This project is covered by ${licence}

## Contributing
${contribution}

## Tests
${tests}

## Credits 
${credits}


## Questions
If you have any questions you can reach me either on email ${email} or please see my [Github Profile](www.github.com/${questions})`;



const init = () => {
    promptUser()
    .then((answers) => fs.writeFileSync('README.md', generateREADMe(answers)))
    .then(() => console.log('successfully wrote README.md'))
    .catch((err) => console.error(err));

};


init();













