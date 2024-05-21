import { IWeather, IWeatherError } from "./mainInterfaces";
import { displayData } from "./displayData";

export async function sendCityInfo(city: string) {
	const result: IWeather | IWeatherError = await getData(city);
	if (typeof result === "object" && "error" in result) {
		alert("Could not find location, try again");
		return;
	}
	displayData(result);
	if (localStorage.getItem("search"))
		localStorage.removeItem("search");
	localStorage.setItem("search", city);
}


async function getData(location: string): Promise<IWeather | IWeatherError> {
	try {
		const key: string = "e7ced9d94cd541f5a8e184800241405";
		const response: Response = await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3&aqi=no&alerts=no&hour=9`
			, { mode: 'cors' }
		)
		const weatherData: IWeather | IWeatherError = await response.json();
		return weatherData;
	}
	catch (error) {
		alert("There was an error retrieving the data, please try again later");
	}
}