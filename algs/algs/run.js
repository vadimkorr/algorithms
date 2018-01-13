let fs = require("fs");

var obj = JSON.parse(fs.readFileSync('./algorithms.json', 'utf8'));
console.log(obj);
console.log("solution: " + obj[0].solution)