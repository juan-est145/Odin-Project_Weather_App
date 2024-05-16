import { getData, IWeatherData, IWeatherError } from "./weatherData";

const result = getData("Jaén");

result.then((fulfilled: IWeatherData | IWeatherError) => {
	if (typeof fulfilled === "object" && "error" in fulfilled) {
		console.log("Location does not exist");
		return;
	}
	console.log(fulfilled);
	console.log(fulfilled.location.name);
	console.log(fulfilled.current.condition.text);
});