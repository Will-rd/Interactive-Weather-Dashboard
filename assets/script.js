var searchFormEl = document.querySelector("#search-form");
var forecastBox = document.getElementById('weather-box');




// printWeather();

function handleFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;

    if (!searchInputVal) {
        console.error('You should type in a city to search');
        return;
    } else {
        var getCityName = 'https://api.openweathermap.org/data/2.5/forecast?q=' + searchInputVal + '&appid=ce94aecb235fc652e0d380d6fc083fb4';

        fetch(getCityName)
            .then(function (response) {
                // console.log(response);
                return response.json();

            })
            .then(function (data) {
                // console.log(data.city.coord.lat);
                // console.log(data.city.coord.lon);

                var lat = data.city.coord.lat;
                var lon = data.city.coord.lon;

                getCityName = 'https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=' + lat + '&lon=' + lon + '&cnt=50&appid=ce94aecb235fc652e0d380d6fc083fb4'
                // console.log(getCityName);

                fetch(getCityName)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data);
                        console.log(data.city.name);
                        console.log(data.list[0].dt_txt);
                        var cardEl = document.createElement('div')
                        cardEl.setAttribute("class", "card col-md-3");
                        cardEl.setAttribute("style", "width: 20rem");
                        cardEl.textContent = data.city.name;

                        forecastBox.appendChild(cardEl);
                    })

            })
    }


}

searchFormEl.addEventListener('submit', handleFormSubmit);