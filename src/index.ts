import { sendCityInfo,} from "./getWeatherData";
import "./style.css"

const searchButton = document.querySelector("#search");
searchButton.addEventListener("click", async (e) => {
	e.preventDefault();
	await sendCityInfo();
});

