const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

//Prompt questions to the user
function askQuestions(){
    return inquirer.prompt([
        // array of questions for user to provide input
        {
            type: "input",
            name: "title",
            message:"What is the title of this project?",
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description for this project.",
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation steps for this project.",
        },
        {
            type: "input",
            name: "usage",
            message: "How does the user run this program?",
        },
        {
            type: "checkbox",
            name: "license",
            message: "What kinda of license would you like your project to have?",
            choices: [
                "MIT",
                "ISC",
                "Apache",
                "GNU GPLv3"
            ],
        },
        {
            type: "input",
            name: "contribution",
            message: "Who is contributing to this project?",
        },
        {
            type: "input",
            name: "test",
            message: "How will the users test this program?",
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        }
    ]);
}

// function to initialize program
async function init() {
    try{
        //generate user input
        const response = await askQuestions();
        const content = generateMarkdown(response);

        //write README file
        await writeFileAsync('./content/README.md', content);
        console.log('successfully wrote to README.md');
    } catch(err){
        console.log(err);
    }

}

// function call to initialize program
init();
