const seriesDurations = [
    {
      title: "Game of thrones",
      days: 7,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Breaking bad",
      days: 5,
      hours: 6,
      minutes: 0,
    },
    {
      title: "Rick and morty",
      days: 10,
      hours: 12,
      minutes: 20,
    },
  ];
  
  
    function seriesText() {
    const age = 80;
    const ageInHr = age * 365 * 24;
    let total = 0;
    for (let i = 0; i < seriesDurations.length; i++) {
      const seriesCalcTime =
        seriesDurations[i].days *
        (seriesDurations[i].hours + seriesDurations[i].minutes / 60);
      const timeSpent = ((seriesCalcTime * 100) / ageInHr) * 100;
      console.log(timeSpent);
      const time = timeSpent.toFixed(2);
      console.log(seriesDurations[i].title + " took " + time + "% of my life");
      total += timeSpent;
      
    }
      const totalTime = total.toFixed(2);
    console.log("In total, the serieses took " + totalTime + "% of my life.");
  }
  seriesText();