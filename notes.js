console.log('Starting notes.js');

module.exports.addNote =  function () {
    console.log("add note.");
    return "New Note";
}


module.exports.addNumber = (a,b) => {
    console.log('a plus b');
    return a + b;
}