console.log('Starting the app.js');
const fs = require('fs');
const notes = require('./notes.js');
const yargs = require('yargs');
const _ = require('lodash');
var argv = yargs.argv;
//var command = process.argv[2];
var command = argv._[0];
//console.log("length process " + process.argv.length)
//console.log(process.argv)
console.log('Process: ', process.argv)
console.log("Command yargs ", argv)
if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log("Successfully add new notes\n")
        notes.logNote(note)
    } else {
        console.log("No new notes added")
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var getNote = notes.readNote(argv.title)
    
    if(getNote){
        console.log("Found a note ")
        notes.logNote(getNote)

    }
    
    else{
        console.log("No note found")
    }
    
} else if (command === 'delete') {
    var noteRemoved = notes.deleteNote(argv.title)
    var message = noteRemoved ? "Note was removed" : "No note was removed"
    console.log(message)
} else {
    console.log("Command not recognized")
}
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
// Sum of array
//var a = [1,2,3,4,5];
//
//var result = 0;
//
//for(let i = 0; i < a.length; i++){
//    console.log("angka " + a[i])
//    result += a[i]
//    
//    
//}
//
//console.log("result " + result)
//plus-minus problem
//var arr =[1, 2, 3, -1, -2, -3, 0, 0]
//let positive = 0
// let negative = 0
// let zero = 0
// 
// arr.forEach((element) => {
//     if(element > 0) positive++
//     else if(element < 0) negative++
//     else zero ++
// })
// positive = positive/arr.length
// negative = negative/arr.length
// zero = zero/arr.length
//    
//console.log( positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' +zero.toFixed(6))
//
