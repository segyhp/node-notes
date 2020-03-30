const chalk = require("chalk");
const notes = require('./notes.js');

const command = process.argv[2];

console.info(process.argv);

if (command === 'add') {
    console.log("Adding note");
} else if (command === 'delete') {
    console.log('deleting note..');
}