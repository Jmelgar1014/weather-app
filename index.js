const apiKey = 'aa3e15fa0b82c95e31d106ada58228dc';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';
const searchBox = document.querySelector('input');
const submit = document.querySelector('span');
const icon = document.querySelector('img');
const conditions = document.querySelector('p');
//&appid={API key}

async function forecast(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data);
    document.getElementById('cityName').innerHTML = searchBox.value;
    document.getElementById('temp').innerHTML = Math.floor(data.main.temp);
    
    if(data.weather[0].main == 'Clouds'){
        icon.src = 'images/wi-cloud.svg';
        conditions.innerHTML = 'Cloudy';
    }else if(data.weather[0].main == 'Clear'){
        icon.src = 'images/wi-day-sunny.svg'
        conditions.innerHTML = 'Clear';
    }else if(data.weather[0].main == 'Rain'){
        icon.src = 'images/wi-night-rain.svg'
        conditions.innerHTML = 'Rain';}
    


    
}

function search(){
    forecast(searchBox.value);
}

submit.addEventListener('click',search);


//api url

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}