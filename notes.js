console.log('Starting notes.js');

const fs = require('fs')

var addNote = (title, body) => {
    //    console.log("Adding notes ", title, body)
    var notes = [];
    var note = {
        title,
        body
    }

    try {

        var notesString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(notesString);

    } catch (e) {}


    var duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push(note)

        fs.writeFileSync('notes-data.json', JSON.stringify(notes))
    }


}
var getAll = () => {
    console.log("Get all the notes")
}
var readNote = (title) => {
    console.log("Read the title : " + title) 
}
var deleteNote = (title) => {
    console.log("Delete the note : " + title)
}
module.exports = {
    addNote,
    getAll,
    readNote,
    deleteNote
};
//module.exports.addNote =  function () {
//    console.log("add note.");
//    return "New Note";
//}
//module.exports.addNumber = (a,b) => {
//    console.log('a plus b');
//    return a + b;
//}
