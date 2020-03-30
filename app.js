const chalk = require("chalk");
const notes = require('./notes.js');
const yargs = require('yargs');


//Customize app version
yargs.version('1.00');

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv) => {
      notes.addNote(argv.title, argv.body);
    }
});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log("Removed existing note.")
    }
});

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: function () {
        console.log("Reading a note.")
    }
});

//Create list command
yargs.command({
    command: 'list',
    describe: 'List all note',
    handler: function () {
        console.log("Listing all note.")
    }
});

console.log(yargs.argv);
// yargs.parse();