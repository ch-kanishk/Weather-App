const delhi = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd985f1d32mshd10832f84e84c45p1e6872jsnba1219924113',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeatherdelhi = (delhi)=>{



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', delhi)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        delhi_temp.innerHTML = response.temp
        delhi_wind.innerHTML = response.wind_speed
        delhi_feels.innerHTML = response.feels_like
        delhi_humidity.innerHTML = response.humidity
    })
	.catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
    getWeather(delhi.value)
})

getWeatherdelhi(delhi)

console.log("delhi temp");

