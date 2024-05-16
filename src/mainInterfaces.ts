import { ILocationCurrent, ICurrentWeatherData, IForecastWeather, IError } from "./subInterfaces"

export interface IWeather extends Object {
	location: ILocationCurrent,
	current: ICurrentWeatherData,
	forecast: IForecastWeather
}

export interface IWeatherError extends Object {
	error: IError
}