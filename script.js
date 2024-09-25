document.addEventListener("DOMContentLoaded", () => {
  const queryInput = document.getElementById("query-input");
  const submitButton = document.getElementById("submit-query");
  const resultsContainer = document.getElementById("results-container");
  const mapContainer = document.getElementById("map-container");

  let map = L.map("map-container").setView([0, 0], 2);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  let marker;
  submitButton.addEventListener("click", () => {
    const query = queryInput.value.trim();
    if (query) {
      resultsContainer.innerHTML = "<p>Processing query...</p>";
      processQuery(query);
    } else {
      resultsContainer.innerHTML = "<p>Please enter a query.</p>";
    }
  });

  async function processQuery(query) {
    try {
      const geocodeResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}`
      );
      const geocodeData = await geocodeResponse.json();

      if (geocodeData && geocodeData.length > 0) {
        const result = geocodeData[0];
        const lat = parseFloat(result.lat);
        const lon = parseFloat(result.lon);

        updateMap(result);
        const weatherData = await fetchWeather(lat, lon);
        displayResults(result, weatherData);
      } else {
        resultsContainer.innerHTML =
          "<p>Location not found. Please try a different query.</p>";
      }
    } catch (error) {
      console.error("Error processing query:", error);
      resultsContainer.innerHTML =
        "<p>An error occurred while processing your query.</p>";
    }
  }

  async function fetchWeather(lat, lon) {
    const apiKey = "d4c43130cff1273b935653c6876e5928";
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    return await weatherResponse.json();
  }

  function displayResults(result, weatherData) {
    let content = `
            <h3>Results for: ${result.display_name}</h3>
            <ul>
                <li>Type: ${result.type}</li>
                <li>Latitude: ${result.lat}</li>
                <li>Longitude: ${result.lon}</li>
            </ul>
        `;

    if (weatherData) {
      content += `
                <h4>Weather Information:</h4>
                <ul>
                    <li>Temperature: ${weatherData.main.temp}°C</li>
                    <li>Feels like: ${weatherData.main.feels_like}°C</li>
                    <li>Condition: ${weatherData.weather[0].description}</li>
                    <li>Humidity: ${weatherData.main.humidity}%</li>
                    <li>Wind Speed: ${weatherData.wind.speed} m/s</li>
                </ul>
            `;
    }

    resultsContainer.innerHTML = content;
  }

  function updateMap(result) {
    const lat = parseFloat(result.lat);
    const lon = parseFloat(result.lon);

    map.setView([lat, lon], 10);

    if (marker) {
      map.removeLayer(marker);
    }

    marker = L.marker([lat, lon]).addTo(map);

    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }
});
