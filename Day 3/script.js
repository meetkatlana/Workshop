const API_KEY = "48ea2cda9af395d7b2abe4b8cf4903ab";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }
     
    try {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        
        if (data.cod !== 200) {
            document.getElementById("weatherInfo").innerHTML = `<p>${data.message}</p>`;
            return;
        }
        
        document.getElementById("weatherInfo").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Feels Like: ${data.main.feels_like}°C</p>
            <p>Max Temp: ${data.main.temp_max}°C</p>
            <p>Min Temp: ${data.main.temp_min}°C</p>
        `;
    } catch (error) {
        document.getElementById("weatherInfo").innerHTML = `<p>Error fetching data</p>`;
    }
}
