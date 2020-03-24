const fs = require("fs");
fs.writeFileSync('notes.txt', "This file is created by with Node JS.");
fs.appendFileSync('notes.txt', '\nThis is the additional data for notes.');