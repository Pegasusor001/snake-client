const headleUserInput = function (key) {
  // your code here
  if (key === 'q'){
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin; 
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", headleUserInput);
  return stdin;
};
// the stdin object returned by setupInput will allow us to listen for keyboard input and react to it

module.exports = setupInput;


// setupInput();


