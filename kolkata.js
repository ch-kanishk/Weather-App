const kolkata = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd985f1d32mshd10832f84e84c45p1e6872jsnba1219924113',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeatherkolkata = (kolkata)=>{



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', kolkata)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        kolkata_temp.innerHTML = response.temp
        kolkata_wind.innerHTML = response.wind_speed
        kolkata_feels.innerHTML = response.feels_like
        kolkata_humidity.innerHTML = response.humidity
    })
	.catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
    getWeather(kolkata.value)
})

getWeatherkolkata(kolkata)

console.log("kolkata temp");

