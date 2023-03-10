const logEarth = () => console.log("Earth");
const logSaturn = () => console.log("Saturn");

function logPlanet(planetLogFunction) {
  planetLogFunction();
}

logPlanet(logEarth);  // Output: "Earth"
logPlanet(logSaturn); // Output: "Saturn"
