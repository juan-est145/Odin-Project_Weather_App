import { getData, IWeatherData } from "./weatherData";

const result = getData();

result.then((fullfilled: IWeatherData) =>
{
	Object.keys(fullfilled).forEach((key) => console.log(key));
	console.log(fullfilled);
	console.log(fullfilled.location.name);
	console.log(fullfilled.current.condition.text);
});
