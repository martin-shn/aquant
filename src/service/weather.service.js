import { httpService } from './http.service';

const API_KEY = 'SI5rgAdSOg2pYUHTC0RHufNqVS3hxXRK'

export const weatherService = {
    getCompleteText,
    getDailyForecasts,

}




async function getCompleteText(city) {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`
    const results = await httpService.get(url)
    console.log(results);
    return results 
}
async function getDailyForecasts(locKey) {
    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locKey}?apikey=${API_KEY}`
    const results = await httpService.get(url)
    return results

}