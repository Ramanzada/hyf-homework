function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000);
  }
  
  function sayHello() {
    console.log("Hello!");
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  runAfterDelay(2, sayHello); // Output: "Hello!" after 2 seconds
  runAfterDelay(1, sayGoodbye); // Output: "Goodbye!" after 1 second
  