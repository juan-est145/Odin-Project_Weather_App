export async function getData(): Promise<IWeatherData> {
	try {
		const response: Response = await fetch("https://api.weatherapi.com/v1/current.json?key=e7ced9d94cd541f5a8e184800241405&q=jaen", { mode: 'cors' });
		const weatherData: IWeatherData = await response.json();
		return (weatherData);
	}
	catch (error) {
		console.log("xd");
	}
}

export interface IWeatherData {
	location: ILocation,
	current: ICurrent
}

interface ILocation {
	name: string,
	region: string,
	country: string,
	lat: number,
	lon: number,
	tz_id: string,
	localtime_epoch: number,
	localtime: string
}

interface ICurrent {
	last_updated_epoch: number,
	last_updated: string,
	temp_c: number,
	temp_f: number,
	is_day: number,
	condition : ICondition,
	wind_mph: number,
	wind_kph: number,
	wind_degree: null,
	wind_dir: string,
	pressure_mb: number,
	pressure_in: number,
	precip_mm: number,
	precip_in: number,
	humidity: number,
	cloud: number,
	feelslike_c: number,
	feelslike_f: number,
	vis_km: number,
	vis_miles: number,
	uv: number,
	gust_mph: number,
	gust_kph: number
}

interface ICondition {
	text: string,
	icon: string,
	code: number
}

/*export interface WeatherData{
	location: {
		name : string,
		region: string,
		country: string,
		"lat": 37.77,
		"lon": -3.78,
		"tz_id": "Europe/Madrid",
		"localtime_epoch": 1715859763,
		"localtime": "2024-05-16 13:42"
	},
	"current": {
		"last_updated_epoch": 1715859000,
		"last_updated": "2024-05-16 13:30",
		"temp_c": 19,
		"temp_f": 66.2,
		"is_day": 1,
		"condition": {
			"text": "Sunny",
			"icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
			"code": 1000
		},
		"wind_mph": 2.2,
		"wind_kph": 3.6,
		"wind_degree": 278,
		"wind_dir": "W",
		"pressure_mb": 1013,
		"pressure_in": 29.91,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 37,
		"cloud": 0,
		"feelslike_c": 19,
		"feelslike_f": 66.2,
		"vis_km": 10,
		"vis_miles": 6,
		"uv": 5,
		"gust_mph": 12.1,
		"gust_kph": 19.5
	}
}*/


