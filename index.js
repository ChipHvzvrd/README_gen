const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        name: "project",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "motivation",
        message: "What was the motive for building this?"
    },
    {
        type: "input",
        name: "elaborate",
        message: "Can you explain further?"
    },
    {
        type: "input",
        name: "solve",
        message: "What problem does this app hope to solve?"
    },
    {
        type: "input",
        name: "learn",
        message: "What is something you have learned in building this project?"
    },
    {
        type: "input",
        name: "insall",
        message: "How is this project installed?"
    },
    {
        type: "input",
        name: "uses",
        message: "What other uses beyond its primary function could this application be used?"
    },
    {
        type: "input",
        name: "credit",
        message: "Who were the other contributors on this project if any?"
    },
    {
        type: "list",
        name: "license",
        message: "What license was used for this project?",
        choices: licenses
    },
    {
        type: "input",
        name: "colab",
        message: "Did you use any other projects for inspiration or did you utilise another creators code?"
    },
    {
        type: "input",
        name: "badges",
        message: "Do you have any badges you would like to list?"
    },
    {
        type: "input",
        name: "features",
        message: "What are some features that your project has?"
    },
    {
        type: "input",
        name: "gh",
        message: "What repository can people contribute to your project?"
    },
    {
        type: "input",
        name: "email",
        message: "What is a good email to reach you for future projects?"
    },
];