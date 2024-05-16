import { getData,} from "./getWeatherData";
import { IWeather, IWeatherError } from "./mainInterfaces";

const result = getData("Jaén");

result.then((fulfilled: IWeather | IWeatherError) => {
	if (typeof fulfilled === "object" && "error" in fulfilled) {
		alert("Could not find location, try again");
		return;
	}
	console.log(fulfilled);
	console.log(fulfilled.location.name);
	console.log(fulfilled.current.condition.text);
});