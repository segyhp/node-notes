console.log('hello the app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');


var res = notes.addNote();

var num = notes.addNumber(4,-15);


console.log(res);
console.log(num);
//var user = os.userInfo();


//fs.appendFile('greetings.txt', `Good Morning ${user.username} ! You are ${notes.age}`, function(err){
//    if(err){
//        console.log("Unable to write to file!");
//    }
//});   