import { getData, IWeatherData } from "./weatherData";

const result = getData("xd");

result.then((fullfilled: IWeatherData) => {
	Object.keys(fullfilled).forEach((key) => console.log(key));
	if (fullfilled.hasOwnProperty("error")) {
		console.log("Location does not exist");
		return;
	}
	console.log(fullfilled);
	console.log(fullfilled.location.name);
	console.log(fullfilled.current.condition.text);
});
