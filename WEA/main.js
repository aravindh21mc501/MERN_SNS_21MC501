// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


const api = {
    base: 'https://api.openweathermap.org/data/2.5/weather?',
    key: '5a68f4eb2ab76a9dabcfa2f59c2ba6da'
}

const city = document.getElementById('city');


city.addEventListener('keypress', function(event){
  if(event.key === 'Enter' ){
    getWeather(city.value);
  }
}) ;

function getWeather(city){
    fetch(`${api.base}q=${city}&units=metric&appid=${api.key}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}
