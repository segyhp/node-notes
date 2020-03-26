const validator = require('validator');
const chalk = require("chalk");

const fs = require("fs");
const notes = require('./notes.js');
//fs.writeFileSync('notes.txt', "This file is created by with Node JS.");
//fs.appendFileSync('notes.txt', '\nThis is the additional data for notes.');

const msg = notes();

console.log(msg);

console.log(chalk.green.bold.bgBlueBright('Success!..'));

console.log(validator.isEmail('email@email.com'));
console.log(validator.isURL('hehe'));
