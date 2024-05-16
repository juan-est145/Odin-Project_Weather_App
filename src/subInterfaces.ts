export interface ILocationCurrent {
	name: string,
	region: string,
	country: string,
	localtime: string
}

export interface ICurrentWeatherData {
	temp_c: number,
	temp_f: number,
	is_day: number,
	condition: IWeatherCondition,
	feelslike_c: number,
	feelslike_f: number,
}

export interface IWeatherCondition {
	text: string,
	icon: string,
}

export interface IForecastWeather extends Object{
	forecastday: IForecastDay[]
}

interface IForecastDay {
	date: string,
	day: IDayData
}

interface IDayData {
	maxtemp_c : number,
	maxtemp_f: number,
	mintemp_c: number,
	mintemp_f: number,
	avgtemp_c: number,
    avgtemp_f: number,
}

export interface IError {
	code: number,
	message: string
	condition: IWeatherCondition
}

