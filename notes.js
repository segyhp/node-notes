console.log('Starting notes.js');



var addNote = (title, body) =>{
    console.log("Adding notes ", title, body)
}

var getAll = () => {
    console.log("Get all the notes")
}

var readNote = (title) => {
    console.log("Read the title : " + title )
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