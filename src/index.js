const fs = require('fs');
const inquirer = require("inquirer");
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

const promptUser = [
    // Name
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    // ID
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID number? (Required)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter your ID Number!');
                return false;
            }
        }
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }
]

