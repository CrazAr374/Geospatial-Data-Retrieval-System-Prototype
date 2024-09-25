# Geospatial Data Retrieval System - Prototype

Welcome to the **Geospatial Data Retrieval System Prototype**. This project serves as a proof-of-concept for retrieving geospatial data such as weather, geographical coordinates, and mapping using modern web technologies and APIs. The goal is to provide users with an easy-to-use interface where they can input queries (cities or places) and receive detailed results, including map visualizations and weather information.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [API Integrations](#api-integrations)
5. [Detailed Explanation](#detailed-explanation)
   - [HTML Structure](#html-structure)
   - [CSS for Styling](#css-for-styling)
   - [JavaScript Functionalities](#javascript-functionalities)
6. [How to Use](#how-to-use)
7. [Installation Guide](#installation-guide)
8. [GitHub Repository](#github-repository)
9. [Future Enhancements](#future-enhancements)
10. [Credits](#credits)

---

## Project Overview

The **Geospatial Data Retrieval System** is a web-based prototype designed to demonstrate geospatial query handling. Users can enter a place name (e.g., a city) to receive detailed information including:
- Latitude and Longitude of the queried place
- Interactive map marking the place on the world map
- Weather information such as temperature, wind speed, humidity, and more

This prototype makes use of APIs for geocoding and weather information, combining geospatial data retrieval with real-time weather data.

---

## Features

This project boasts several core features:
1. **Geospatial Query Handling**: Users can input a city or place name to get its geographical coordinates.
2. **Interactive Mapping**: The system uses the Leaflet.js library to display an interactive map marking the queried location.
3. **Weather Information**: Real-time weather data (temperature, wind, humidity, etc.) is fetched using the OpenWeather API.
4. **Responsive UI**: The project is designed to be responsive and adapts to different screen sizes, from desktops to mobile devices.
5. **Modern Design**: Uses a clean, modern, and visually appealing interface with animations and hover effects.
6. **Error Handling**: Displays helpful messages when the user input is invalid or when there is a problem fetching data.
7. **Real-time Interaction**: Dynamic feedback is given to the user as they input data, ensuring a smooth interaction.

---

## Technologies Used

Several modern web development technologies were employed in this project:

### 1. **Frontend Technologies:**
   - **HTML5**: For creating the structure of the webpage.
   - **CSS3**: For styling the webpage and ensuring responsiveness.
   - **JavaScript (ES6)**: For client-side logic, API calls, and DOM manipulation.
   
### 2. **External Libraries:**
   - **Leaflet.js**: A lightweight open-source JavaScript library used to create interactive maps.
   - **Font Awesome**: For scalable vector icons, used in the GitHub link.
   - **Google Fonts**: For importing the "Roboto" font family to enhance readability.

### 3. **APIs:**
   - **Nominatim (OpenStreetMap Geocoding API)**: Used to convert user queries into latitude and longitude.
   - **OpenWeather API**: Used to fetch real-time weather information based on the geographical coordinates returned by the geocoding API.

---

## API Integrations

### 1. **Nominatim (OpenStreetMap) API**
Nominatim is a geocoding API that turns address strings into geographical coordinates. The query is sent in the format of a place name (like a city) and returns detailed location data, including latitude, longitude, and a description of the place.

Example Query:
```javascript
https://nominatim.openstreetmap.org/search?format=json&q=<PLACE_NAME>
```

### 2. **OpenWeather API**
This API is used to fetch real-time weather data, given a pair of latitude and longitude values. The data includes:
- Current temperature (in °C)
- Weather conditions (e.g., clear, cloudy)
- Humidity level
- Wind speed

Example Query:
```javascript
https://api.openweathermap.org/data/2.5/weather?lat=<LATITUDE>&lon=<LONGITUDE>&appid=<API_KEY>&units=metric
```

---

## Detailed Explanation

### HTML Structure
The HTML structure is composed of semantic elements like `<header>`, `<main>`, `<footer>`, and `<section>`. Key parts of the HTML:
- **Header**: Contains the project title and a link to the GitHub repository.
- **Main Section**: Divided into two key areas:
  - **Query Section**: Where users input their geospatial query.
  - **Results Section**: Where the results, including map and weather data, are displayed.
- **Footer**: Contains copyright information.

### CSS for Styling
The styles are handled through both custom CSS and external libraries:
- **Custom Colors**: The use of CSS variables like `--primary-color` ensures that the theme is consistent across the project.
- **Background**: A high-quality background image is used to make the design visually appealing.
- **Cards**: Information is displayed inside "cards," which have a sleek shadow effect to enhance the design.
- **Responsive Design**: Media queries ensure that the layout adapts to smaller screen sizes.

### JavaScript Functionalities
JavaScript is used to provide interactivity:
- **Event Listeners**: The "Submit Query" button triggers the process of fetching geolocation and weather data.
- **Geocoding API Calls**: Upon user input, a query is sent to the Nominatim API to fetch the geographical coordinates of the place.
- **Weather API Calls**: Once the coordinates are obtained, the OpenWeather API fetches the corresponding weather data.
- **Map Update**: The map is dynamically updated using Leaflet.js, with markers added to pinpoint the location.
- **Error Handling**: If the query returns no results or if there is a network issue, a helpful error message is displayed.

---

## How to Use

1. **Enter a Geospatial Query**: Type the name of any place or city into the provided textarea.
2. **Click "Show result and information"**: The system will process the query and display the results.
3. **View the Results**: If a valid place is found, the map will show the location, and weather data will be displayed alongside the geographical information.
4. **Map Interaction**: Users can zoom in and out of the map to explore nearby regions.

---

## Installation Guide

Follow these steps to run the project locally:

1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/CrazAr374/Geospatial-Data-Retrieval-System-Prototype
   ```
2. Navigate into the project directory:
   ```bash
   cd Geospatial-Data-Retrieval-System-Prototype
   ```
3. Open `index.html` in your browser to view the project.

No special dependencies are required beyond a modern browser with internet access (to fetch the external APIs).

---

## GitHub Repository

You can find the source code of this project here:  
[Geospatial Data Retrieval System Prototype - GitHub Repo](https://github.com/CrazAr374/Geospatial-Data-Retrieval-System-Prototype)

---

## Future Enhancements

Some potential future improvements to this project:
1. **Search Suggestions**: Add auto-complete suggestions for place names as users type.
2. **Improved Weather Data**: Display more detailed weather forecasts (hourly, weekly) and historical data.
3. **Multiple Queries**: Allow users to query multiple places simultaneously and compare the results.
4. **Custom Markers**: Enable custom icons for markers based on weather conditions (e.g., sunny, cloudy).
5. **Save Queries**: Let users save and revisit their previous queries.

---

## Credits

This project was developed using open-source technologies and the following resources:
- **Leaflet.js** for map visualizations.
- **Nominatim API** by OpenStreetMap for geolocation data.
- **OpenWeather API** for real-time weather information.
- **Unsplash** for the background image.
- **Font Awesome** for icons used in the project.
  
Developed by [Atharva Rahate](https://github.com/CrazAr374). 
