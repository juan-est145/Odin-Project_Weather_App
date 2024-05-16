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
