function getMyAge() {
  const yearOfBirth = 1983; //your birth year
  const yearFuture = 2027; //future year to calculate
  let age = yearFuture - yearOfBirth; //calculate age
  //answer result
  let logString = "You will be " + age + " years old in " + yearFuture; //prepare text to answer

  alert(logString);
  console.log(logString);
}

function getDogAge() {
  const dogYearOfBirth = 2017; //Dog birth year
  const dogYearFuture = 2027; //Future Year
  let dogYear = dogYearFuture - dogYearOfBirth; //Calculate Age
  let shouldShowResultInDogYears = true; //Set true if is for dog year and set false for human year only
  let logString =
    "Your dog will be " + dogYear + " human years old in " + dogYearFuture; //first is show human year

  if (shouldShowResultInDogYears) {
    dogYear *= 7;
    logString +=
      "\n or your dog will be " +
      dogYear +
      " dog years old in " +
      dogYearFuture;
  }
  //answer result
  alert(logString);
  console.log(logString);
}

function getHousePrice() {
  const peterHouseCost = 2500000;
  const juliaHouseCost = 1000000;
  const salesPriceRate = 2.5;
  const houseUnitPrice = 1000;
  const gardenUnitPrice = 300;
  const peterGardenVolume = 100;
  const juliaGardenVolume = 70;

  let peterHouseVolume = 8 * 10 * 10;
  let juliaHouseVolume = 5 * 11 * 8;

  let peterGardenPrice = peterGardenVolume * gardenUnitPrice;
  let juliaGardenPrice = juliaGardenVolume * gardenUnitPrice;

  let peterHousePrice = peterHouseVolume * salesPriceRate * houseUnitPrice;
  let juliaHousePrice = juliaHouseVolume * salesPriceRate * houseUnitPrice;

  let peterSalePrice = peterHousePrice + peterGardenPrice;
  let juliaSalePrice = juliaHousePrice + juliaGardenPrice;

  let peterDiff = peterSalePrice - peterHouseCost;
  let juliaDiff = juliaSalePrice - juliaHouseCost;

  let logString =
    "Peter's price=" +
    peterHousePrice +
    " Cost=" +
    peterHouseCost +
    " Change=" +
    peterDiff;
  logString +=
    "\nJulia's price=" +
    juliaHousePrice +
    " Cost=" +
    juliaHouseCost +
    " Change=" +
    juliaDiff;

  alert(logString);
  console.log(logString);
}

function getStartupName() {
  //first words array for first name of the company
  const firstWords = [
    "Eazy",
    "Juicy",
    "Awezome",
    "Superb",
    "Exzellent",
    "YeahYeah",
    "Nicey",
    "Perrfect",
    "Alle",
    "ForYou",
  ];
  //second words array for type of the company
  const secondWords = [
    "Company",
    "Solution",
    "Technology",
    "Soft",
    "Cooperation",
    "Inc",
    "Limited",
    "Corp",
    "Partnership",
    "Application",
  ];
  //find random value with in total of records in array
  let randomFirst = Math.floor(Math.random() * firstWords.length);
  let randomSecond = Math.floor(Math.random() * secondWords.length);
  //create company name
  let startupName = firstWords[randomFirst] + " " + secondWords[randomSecond];
  //answer result
  let logString = 'The Startup: "' + startupName + '"';
  alert(logString);
  console.log(logString);
}
