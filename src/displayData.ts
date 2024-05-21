import { IWeather } from "./mainInterfaces";

export function displayData(data: IWeather): void {
	const weatherDisplay: HTMLElement = document.querySelector("#weather");
	while (weatherDisplay.firstChild != null)
		weatherDisplay.removeChild(weatherDisplay.firstChild);
	createCurrentTimeCard(data);
	createForecastTimeCard(data);
}

function createCurrentTimeCard(data: IWeather): void {
	const weatherDisplay: HTMLElement = document.querySelector("#weather");
	const card: HTMLElement = document.createElement("div");
	const header: HTMLElement = document.createElement("div");
	const city: HTMLElement = document.createElement("h4");
	const celsiusInfo: HTMLElement = document.createElement("div");
	const weatherImage: HTMLImageElement = document.createElement("img");
	const celsiusDegrees: HTMLElement = document.createElement("span");
	const timeDescriptionSpan: HTMLElement = document.createElement("span");
	const sensationSpan: HTMLElement = document.createElement("span");

	city.textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
	weatherImage.src = data.current.condition.icon;
	celsiusDegrees.textContent = `${data.current.temp_c.toString()} ºC`;
	timeDescriptionSpan.textContent = data.current.condition.text;
	sensationSpan.textContent = `Feels like ${data.current.feelslike_c.toString()} ºC`;

	card.classList.add("card");
	card.appendChild(header);
	header.appendChild(createSvg());
	header.appendChild(city);
	card.appendChild(celsiusInfo);
	celsiusInfo.appendChild(weatherImage);
	celsiusInfo.appendChild(celsiusDegrees);
	card.appendChild(timeDescriptionSpan);
	card.appendChild(sensationSpan);
	weatherDisplay.appendChild(card);
}

function createForecastTimeCard(data: IWeather): void {
	const weatherDisplay: HTMLElement = document.querySelector("#weather");
	const headerTitle: HTMLElement = document.createElement("h2");
	const forecastCards: HTMLElement = document.createElement("div");

	headerTitle.textContent = "Forecast";
	forecastCards.id = "forecast-cards";
	for (let i: number = 1; i < 3; i++) {
		const card: HTMLElement = document.createElement("div");
		const date: HTMLElement = document.createElement("h4");
		const celsiusInfo: HTMLElement = document.createElement("div");
		const timeImage: HTMLImageElement = document.createElement("img");
		const timeDescriptionSpan: HTMLElement = document.createElement("span");
		const maxTemp: HTMLElement = document.createElement("span");
		const minTemp: HTMLElement = document.createElement("span");
		const avgTemp: HTMLElement = document.createElement("span");

		card.classList.add("card");
		date.textContent = data.forecast.forecastday[i].date;
		timeImage.src = data.forecast.forecastday[i].day.condition.icon;
		timeDescriptionSpan.textContent = data.forecast.forecastday[i].day.condition.text;
		maxTemp.textContent = `Max of ${data.forecast.forecastday[i].day.maxtemp_c.toString()} ºC`;
		minTemp.textContent = `Min of ${data.forecast.forecastday[i].day.mintemp_c.toString()} ºC`;
		avgTemp.textContent = `Average of ${data.forecast.forecastday[i].day.avgtemp_c.toString()} ºC`;

		card.appendChild(date);
		card.appendChild(celsiusInfo);
		celsiusInfo.appendChild(timeImage);
		celsiusInfo.appendChild(timeDescriptionSpan);
		card.appendChild(maxTemp);
		card.appendChild(minTemp);
		card.appendChild(avgTemp);
		forecastCards.appendChild(card);
	}
	weatherDisplay.appendChild(headerTitle);
	weatherDisplay.appendChild(forecastCards);
}

function createSvg(): SVGSVGElement {
	let svg: SVGSVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("viewBox", "0 0 24 24");
	svg.setAttribute("fill", "none");

	let g1: SVGGElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
	g1.setAttribute("id", "SVGRepo_bgCarrier");
	g1.setAttribute("stroke-width", "0");
	svg.appendChild(g1);

	let g2: SVGGElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
	g2.setAttribute("id", "SVGRepo_tracerCarrier");
	g2.setAttribute("stroke-linecap", "round");
	g2.setAttribute("stroke-linejoin", "round");
	svg.appendChild(g2);

	let g3: SVGGElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
	g3.setAttribute("id", "SVGRepo_iconCarrier");

	let path: SVGPathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path.setAttribute("fill-rule", "evenodd");
	path.setAttribute("clip-rule", "evenodd");
	path.setAttribute("d", "M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z");
	path.setAttribute("fill", "#ffffff");
	g3.appendChild(path);

	svg.appendChild(g3);

	return (svg);
}