console.log('hello the app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash')


//var res = notes.addNote();
//
//var num = notes.addNumber(4,-15);
//
//
//console.log(res);
//console.log(num);
//var user = os.userInfo();


//fs.appendFile('greetings.txt', `Good Morning ${user.username} ! You are ${notes.age}`, function(err){
//    if(err){
//        console.log("Unable to write to file!");
//    }
//});   
//
//console.log(_.isString(true));
//console.log(_.isString('Segy')); 
//

var filteredArray = _.uniq(['Segy', 'Hendro' ,'Segy', 1,2,5,1,1,4,2,3])
console.log(filteredArray);


   