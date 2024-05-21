import { sendCityInfo,} from "./getWeatherData";
import "./style.css"

const searchButton = document.querySelector("#search");
if (localStorage.getItem("search"))
	sendCityInfo(localStorage.getItem("search"));
searchButton.addEventListener("click", async (e) => {
	const city : HTMLInputElement = document.querySelector("#search-bar");

	e.preventDefault();
	await sendCityInfo(city.value);
});

