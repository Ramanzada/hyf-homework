// Candy handler

let boughtCandyPrices = [];
function addCandy(candyType, weight) {
  if (candyType == "Sweet") {
    boughtCandyPrices.push(weight * 0.5);
  } else if (candyType == "Chocolate") {
    boughtCandyPrices.push(weight * 0.7);
  } else if (candyType == "Toffe") {
    boughtCandyPrices.push(weight * 1.1);
  } else if (candyType == "Chewing-gum") {
    boughtCandyPrices.push(weight * 0.03);
  }
}
addCandy("Sweet", 20);
addCandy("Chocolate", 10);
addCandy("Toffe", 30);
addCandy("Chewing-gum", 5);
console.log(boughtCandyPrices);
var amountToSpend = Math.floor(Math.random() * 100);
console.log(amountToSpend);
function getSum(total, num) {
  return total + num;
}
var sum = boughtCandyPrices.reduce(getSum);
console.log("the sum is :" + sum);
while (sum < amountToSpend) {
  if (sum >= amountToSpend) {
    console.log("you can not buy more");
    break;
  }
  console.log("you can buy more");
}
