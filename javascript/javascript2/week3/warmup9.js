function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
      logFunnyJoke();
    } else {
      logBadJoke();
    }
  }
  
  function logFunnyJoke() {
    console.log("Why was the math book sad? Because it had too many problems.");
  }
  
  function logBadJoke() {
    console.log("Why was the computer cold? Because it left its Windows open.");
  }
  
  jokeCreator(true, logFunnyJoke, logBadJoke); // Output: "Why was the math book sad? Because it had too many problems."
  jokeCreator(false, logFunnyJoke, logBadJoke); // Output: "Why was the computer cold? Because it left its Windows open."
  