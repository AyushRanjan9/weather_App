function searchWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const cityName = document.getElementById('searchInput').value;
  
    const xhttp = new XMLHttpRequest();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  
    xhttp.onreadystatechange = function() {
        console.log('function');
      if (this.readyState === 4 && this.status === 200) {
        const weatherData = JSON.parse(this.responseText);
        console.log(weatherData);
        displayWeather(weatherData);
         
      }
    };
  
    xhttp.open('GET', url, true);
    xhttp.send();
  }
  
  function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
      <p>${weatherData.weather[0].main}</p>
      <p>Temperature: ${weatherData.main.temp}°C</p>
      <p>Humidity: ${weatherData.main.humidity}%</p>
      <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
      <p>longitude: ${weatherData.coord.lon}</p>
      <p>latitude: ${weatherData.coord.lat} </p>
    `;
  }
  