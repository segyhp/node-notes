console.log('Starting notes.js');
const fs = require('fs')
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json')
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    var duplicateNotes = notes.filter((note) => note.title === title)
    if (duplicateNotes.length === 0) {
        notes.push(note)
        saveNotes(notes);
        
        return note;
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
//    console.log("add not e.");
//    return "New Note";
//}
//module.exports.addNumber = (a,b) => {
//    console.log('a plus b');
//    return a + b;
//}
