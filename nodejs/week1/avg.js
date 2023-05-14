
function calculateAverage(numbers) {
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum / numbers.length;
}


const args = process.argv.slice(2).map(arg => {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.error(`'${arg}' is not a valid number. Please provide only numbers as arguments.`);
    process.exit(1);
  }
  return number;
});


if (args.length === 0) {
  console.error('No arguments provided. Please provide at least one number as an argument.');
  process.exit(1);
}


const average = calculateAverage(args);
console.log(average);
