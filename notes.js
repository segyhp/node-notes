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
    var notes = fetchNotes();
    
    var filteredNotes = notes.filter((note)=> note.title === title)
    
    
    return filteredNotes[0];
    
}
var deleteNote = (title) => {
    
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes)
    
    return notes.length !== filteredNotes.length
    
    
    //save new notes array
}

var logNote = (note) => {
    
    debugger;
    //Break on this line and use REPL to output note
    //use get command with --title
        console.log("________")
        console.log("Title: " + note.title, '\n')
        console.log("Body: " + note.body)
}
module.exports = {
    addNote,
    getAll,
    readNote,
    deleteNote,
    logNote
};
//module.exports.addNote =  function () {
//    console.log("add not e.");
//    return "New Note";
//}
//module.exports.addNumber = (a,b) => {
//    console.log('a plus b');
//    return a + b;
//}
