const client = require('./client.js')
const conn = client();
conn.write('Move: up');

setTimeout(function() {
  conn.write('Move: left')}, 
  1000)

setTimeout(function() {
  conn.write('Move: left')}, 
  1500)
  
setTimeout(function() {
  conn.write('Move: left')}, 
  2000)
  
// client.on()