const appId = 'b1b35bba8b434a28a0be2a3e1071ae5b',
	apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

export default class WeatherApi{
	constructor(lang = 'ru'){
		this.lang = lang;
	}

	getByCity(cityId){
		const URL = `${apiUrl}?id=${cityId}&appid=${appId}&units=metric&lang=${this.lang}`;
		return fetch(URL)
			.then(res => res.json());
	}
}