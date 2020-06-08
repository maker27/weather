import React, {Component} from "react";

import './weather-display.css';
import LoadingIndicator from "../LoadingIndicator/";

import WeatherApi from '../../services/weather-api';

export default class WeatherDisplay extends Component {
	constructor() {
		super();
		this.state = {
			weatherData: null
		};
		this.api = new WeatherApi();
	}

	componentDidMount() {
		const {city} = this.props;

		this.api.getByCity(city.id)
			.then(json => {
				this.setState({weatherData: json});
			});
	}

	render() {
		const {weatherData} = this.state;
		if (!weatherData) return <LoadingIndicator/>;

		const weather = weatherData.weather[0];
		const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
		const todayTemp = weatherData.main.temp_min === weatherData.main.temp_max
			? weatherData.main.temp_min
			: weatherData.main.temp_min + ' - ' + weatherData.main.temp_max;
		return (
			<div className="card"
				 data-city={`${weatherData.name} ${weatherData.coord.lat}°, ${weatherData.coord.lon}°`}>
				<h1 className="card-header">
					{Math.round(weatherData.main.temp)}°, {weather.description}
					<img src={iconUrl} alt={weatherData.description}/>
				</h1>
				<div className="card-body">
					<p>Сегодня: <span className="text-danger">{todayTemp}°</span></p>
					<p>Влажность воздуха: {weatherData.main.humidity}%</p>
					<p>Атмосферное давление: {Math.floor(weatherData.main.pressure * 100 / 133.3224)} мм рт.ст.</p>
					<p>Скорость ветра: {weatherData.wind.speed} м/с</p>
				</div>
			</div>
		);
	}
};
