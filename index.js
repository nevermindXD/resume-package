#!/usr/bin/env node
"use strict";

var inquirer = require("inquirer");
var chalk = require("chalk");

var response = chalk.bold.green;

var resume = require("./resume.json");

var resumePrompts = {
    type: "list",
    name: "Section",
    message: "",
    choices: [...Object.keys(resume), "Exit"]
};

function main() {
    console.log(" Hello, My name is Juan Carlos Olivier Jasso and welcome to my resume :) ");
    resumeHandler();
}

function resumeHandler() {
    inquirer.prompt(resumePrompts).then(answer => {
      if (answer.Section == "Exit") {
        return;
      }
      var option = answer.Section;
      console.log(response("******************************************************************************************************************"));
      resume[`${option}`].forEach(info => {
        console.log(response("|   " + info));
      });
      console.log(response("******************************************************************************************************************"));
      inquirer
        .prompt({
          type: "list",
          name: "exitBack",
          message: "Go back or Exit?",
          choices: ["Back", "Exit"]
        })
        .then(choice => {
          if (choice.exitBack == "Back") {
            resumeHandler();
          } else {
            return;
          }
        });
    });
  }

main();