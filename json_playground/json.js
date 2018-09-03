const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some body'
}

var originalNoteString = JSON.stringify(originalNote);
//console.log(originalNoteString)

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note)
console.log(note.title);