import axios from "axios";
import type Weather from "../models/weather";

 class WeatherService{
    async getWeather(cityName:string):Promise<Weather>{
       const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${cityName}`,
      );
      return response.data
    }
}
const   weatherService = new  WeatherService()
export default weatherService