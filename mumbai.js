const mumbai = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd985f1d32mshd10832f84e84c45p1e6872jsnba1219924113',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeathermumbai = (mumbai)=>{



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', mumbai)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        mumbai_temp.innerHTML = response.temp
        mumbai_wind.innerHTML = response.wind_speed
        mumbai_feels.innerHTML = response.feels_like
        mumbai_humidity.innerHTML = response.humidity
    })
	.catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
    getWeather(mumbai.value)
})

getWeathermumbai(mumbai)

console.log("mumbai temp");

