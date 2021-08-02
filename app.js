const apiKey = 'f3f5d0d128adcbb17cd8bdeb3adcb24f';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => updateUI(data))
}

document.getElementById('search').addEventListener('click', function () {
    const getInput = document.getElementById('city').value;
    getWeatherData(getInput);
});

const updateUI = data => {
    document.getElementById('show-city').innerText = data.name || 'Unknown Location';
    document.getElementById('show-temp').innerText = `${(data.main.temp - 273.15).toFixed(2)}`;
    document.getElementById('lead').innerText = data.weather[0].main;
    document.getElementById('icons').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value = '';
}

// Default Location
getWeatherData('Chittagong');