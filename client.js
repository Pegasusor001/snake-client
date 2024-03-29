// client 
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131", // IP address here,
    port: 50542 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('Successully connected to game server')
    conn.write('Hello');
  });

  return conn;
};  

module.exports = connect;

// console.log("Connecting ...");
connect();
