function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  
  const args = process.argv.slice(2);
  const validNumbers = args.filter(isNumeric).map(Number);
  
  if (args.length === 0) {
    console.log('No arguments provided. Please provide numbers as command line arguments.');
  } else if (validNumbers.length === 0) {
    console.log('No valid numbers provided. Please provide numbers as command line arguments.');
  } else {
    const sum = validNumbers.reduce((acc, current) => acc + current, 0);
    const average = sum / validNumbers.length;
    console.log('Average:', average);
  }
  