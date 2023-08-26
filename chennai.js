const chennai = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd985f1d32mshd10832f84e84c45p1e6872jsnba1219924113',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeatherchennai = (chennai)=>{



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', chennai)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        chennai_temp.innerHTML = response.temp
        chennai_wind.innerHTML = response.wind_speed
        chennai_feels.innerHTML = response.feels_like
        chennai_humidity.innerHTML = response.humidity
    })
	.catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
    getWeather(chennai.value)
})

getWeatherchennai(chennai)

console.log("chennai temp");

