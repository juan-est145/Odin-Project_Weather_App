import { getData,} from "./getWeatherData";
import { IWeather, IWeatherError } from "./mainInterfaces";
import "./style.css"

const result = getData("Sevilla");

result.then((fulfilled: IWeather | IWeatherError) => {
	if (typeof fulfilled === "object" && "error" in fulfilled) {
		alert("Could not find location, try again");
		return;
	}
	console.log(`The time in ${fulfilled.location.name} is ${fulfilled.current.temp_c} ºC`);
	console.log(`The conditon is expected to be ${fulfilled.current.condition.text}`);
	console.log(`${fulfilled.forecast.forecastday.forEach(day =>{
		console.log(`For ${day.date}, the average temperature will be ${day.day.avgtemp_c}`);
	})}`);
});