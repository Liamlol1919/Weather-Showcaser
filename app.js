//time title
var date = new Date
var hours = date.getHours()
var minutes = date.getMinutes()
var timeString = `${hours}:${minutes}`

//set time as title
function setTime(){
  $('.header-title-right').text(timeString);
}

//gets geolocation
function getGeo(callback) {
  $.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
    var cityName = data.city
    var countryName = data.country_name
    callback(cityName,countryName);
  });
}

function setCity(){
  getGeo(function(city,cou) {
    $('.header-title-left').text(city);
    getWeather(city,cou)
  });
} 

setTime()
setCity()

//get wather with api
function getWeather(city, country) {

  
  
  
 
  
  const API_KEY = 'APIKEY';
  
  
  
  
  
  const query = `q=${city},${country}&appid=${API_KEY}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?${query}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      setTemperature(Math.round((data.main.temp-273.159)*10)/10)
    })
    .catch(error => {
      console.error(error);
    });
}

//sets the temperature in dom
function setTemperature(temperature){
  $('.center-title').text(`${temperature}°C`);
}
