console.log('Starting the app.js');


//var res = notes.addNote();
//
//var num = notes.addNumber(4,-15);
//
//
//console.log(res);
//console.log(num);
//var user = os.userInfo();
//
//
//fs.appendFile('greetings.txt', `Good Morning ${user.username} ! You are ${notes.age}`, function(err){
//    if(err){
//        console.log("Unable to write to file!");
//    }
//});   
//
//console.log(_.isString(true));
//console.log(_.isString('Segy')); 
//
//
//var filteredArray = _.uniq(['Segy','Hendro',2,5,1,1,3])
//console.log(filteredArray);
//const os = require('os');


const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');

var command = process.argv[2];
console.log("length process " + process.argv.length)

console.log(process.argv)

console.log('Command: ', command)

if (command === 'add') {
    console.log("Adding new note..")
} else if (command === 'list') {
    console.log("Listing all notes..")
} else if (command === 'read') {
    console.log("Fetching the notes..")
} else if (command === 'delete') {
    console.log("Delete the note..")
} else {
    console.log("Command not recognized")
}
