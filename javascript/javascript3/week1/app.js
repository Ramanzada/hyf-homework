const getWeather = () => {
    const city = document.getElementById("city-input").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1aebc90182b2113106b56d198e76e9b`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("city").innerHTML = `City: ${data.name}`;
        document.getElementById("temperature").innerHTML = `Temperature: ${data.main.temp}`;
        document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("wind-speed").innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
        document.getElementById("cloudiness").innerHTML = `Cloudiness: ${data.clouds.all} %`;
        var sunrise = new Date(data.sys.sunrise * 1000);
        var sunset = new Date(data.sys.sunset * 1000);
        document.getElementById("sunrise").innerHTML = `Sunrise: ${sunrise}`;
        document.getElementById("sunset").innerHTML = `Sunset: ${sunset}`;
        document.getElementById("map").src = `https://maps.google.com/maps?q=${data.coord.lat},${data.coord.lon}&z=10&output=embed`;
      })
      .catch(error => console.log(error));
  };
  