const fs = require('fs');
const inquirer = require("inquirer");
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")

const render = require("./page-template.js");

const teamMembers = [];
const idArray = [];

function init() {

    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name? (Required)",
                validate: (answer) => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter manager's name!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "managerId",
                message: "Enter manager's ID (Required)",
                validate: (answer) => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter the managers ID!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Enter manager's email address (Required)",
                validate: (answer) => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter the managers email address!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Enter office number (Required)",
                validate: (answer) => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter the office number!");
                        return false;
                    }
                },
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        })
    };


    function createTeam() {

        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Add Engineer, Intern or finish? (Required)",
                choices: ["Engineer", "Intern", "Done Adding Team Members"],
            },
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildTeam();

            }
        });
    }
    
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name? (Required)",
                validate: (answer) => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter engineer's name!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "engineerId",
                message: "Enter engineer's employee ID (Required)",
                validate: (answer) => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter the engineers employee ID!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Enter engineer's email address (Required)",
                validate: (answer) => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter the engineers email address!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Enter engineer's github link (Required)",
                validate: (answer) => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter the engineers github link!");
                        return false;
                    }
                },
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        })
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name? (Required)",
                validate: (answer) => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter intern's name!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "internId",
                message: "Enter intern's employee ID (Required)",
                validate: (answer) => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter the interns employee ID!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "internEmail",
                message: "Enter intern's email address (Required)",
                validate: (answer) => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter the interns email address!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "internSchool",
                message: "Enter intern's school (Required)",
                validate: (answer) => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter the interns school!");
                        return false;
                    }
                },
            },
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idArray.push(answers.internId);
            createTeam();
        });
    }



function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}

createManager();
};
init();