const args = process.argv.slice(2);

function average(numbers) {
  const numericArgs = numbers.filter((number) => !isNaN(parseFloat(number)));

  if (numericArgs.length === 0) {
    return 'Please provide numeric arguments only.';
  }

  const sum = numericArgs.reduce((total, number) => total + parseFloat(number), 0);

  return sum / numericArgs.length;
}

console.log(average(args));
