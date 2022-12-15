//Flight booking full name function
console.log("Flight booking fullname function");

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

const fullname1 = getFullName("Marco", "Martins");
const fullname2 = getFullName("Peter", "Parker");

console.log("Full name 1: " + fullname1);
console.log("Full name 2: " + fullname2);

function getFullNameFormal(firstName, lastName, useFormal) {
  if (useFormal) {
    return "Lord " + firstName + " " + lastName;
    // "\n " prints in new line
    // return "Lord " + firstName + "\n " + lastName
  }
  return firstName + " " + lastName;
}

const fullnameFormal1 = getFullNameFormal("Marco", "Martins", true);
const fullnameFormal2 = getFullNameFormal("Peter", "Parker", false);

console.log("Full name 1: " + fullnameFormal1);
console.log("Full name 2: " + fullnameFormal2);
console.log("\n");
