const fs = require('fs');
const notes = require('./notes.js');
const yargs = require('yargs');
const _ = require('lodash');
const titleOptions  = {
    describe : 'Title of the note',
    demand : true,
    alias  : 't'
}
const bodyOptions = {
    describe : 'Body of the note',
    demand : true,
    alias :  'b'
}
const argv = yargs
    .command('add', 'Add a new note', {
    title : titleOptions,
    body : bodyOptions
})
.command ('list', 'Listing all note(s)')
.command ('read', 'Read a note from the list', {
    title : titleOptions
})
.command('delete', 'Delete a note from the list', {
    title : titleOptions
})
.help()
.argv;



var command = argv._[0];
if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log("Successfully add new notes\n")
        notes.logNote(note)
    } else {
        console.log("No new notes added")
    }
} else if (command === 'list') { 
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`)
    allNotes.forEach(note => notes.logNote(note))
} else if (command === 'read') {
    var getNote = notes.readNote(argv.title)

    if (getNote) {
        console.log("Found a note ")
        notes.logNote(getNote)

    } else {
        console.log("No note found")
    }

} else if (command === 'delete') {
    var noteRemoved = notes.deleteNote(argv.title)
    var message = noteRemoved ? "Note was removed" : "No note was removed"
    console.log(message)
} else {
    console.log("Command not recognized")
}
