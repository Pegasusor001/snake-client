const connect = require("./client");
const setupInput = require("./input");
const conn = client();

console.log("Connecting ...");
connect();
setupInput();



// conn.write('Move: up');

// setTimeout(function() {
//   conn.write('Move: left')}, 
//   1000)

