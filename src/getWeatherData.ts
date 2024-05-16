export async function getData(location: string): Promise<Object> {
	try {
		const key: string = "e7ced9d94cd541f5a8e184800241405";
		const response: Response = await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3&aqi=no&alerts=no&hour=9`
			, { mode: 'cors' }
		);
		const weatherData: Object = await response.json();
		return (weatherData);
	}
	catch (error) {
		alert("There was an error retrieving the data, please try again later");
	}
}
