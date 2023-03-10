function logStringWithDelay(delay, stringToLog) {
    setTimeout(() => {
      console.log(stringToLog);
    }, delay * 1000);
  }
  
  logStringWithDelay(2.5, 'Called after 2.5 seconds');
  logStringWithDelay(1, 'Called after 1 second');
  logStringWithDelay(3, 'Called after 3 seconds');
  