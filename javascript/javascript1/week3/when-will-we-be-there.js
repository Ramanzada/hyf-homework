//When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  function timeTakenForDestination(travelInformation) {
  let time = travelInformation.destinationDistance / travelInformation.speed;
    let totalHours = Math.floor(time);
    let totalMinutes = Math.round((time - totalHours) * 60);
    let obj = {totalHours: totalHours, totalMinutes:totalMinutes};
    console.log(`${obj.totalHours} & ${obj.totalMinutes}`) 
    return obj;
    };
  
  const traveltime = timeTakenForDestination(travelInformation);  
  console.log(traveltime);