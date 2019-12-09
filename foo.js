// cat filename | node filename.js
// use this to read from standard input


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const lines = [];
rl.on('line', (line) =>lines.push(line));
rl.on('close', (line) => compute(lines));
  
function compute(lines){
}