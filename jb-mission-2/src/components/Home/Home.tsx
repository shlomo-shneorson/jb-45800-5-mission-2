import { useEffect, useState, type ChangeEvent } from "react";
import "./Home.css";
import axios from "axios";
import type City from "../../models/city";
import type Weather from "../../models/weather";
import weatherService from "../../services/weather.";
import { CardBody } from "react-bootstrap";
import { getData, saveToLocalStorage } from "../../utils/localStorage";

function Home() {
  const [Citys, setCitys] = useState<City[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [weather, setWeather] = useState<Weather | "">();

  async function getWeather(event: ChangeEvent<HTMLSelectElement>) {
    if (!event.target.value) return;
    setIsloading(true);
    try {
      const weatherData = await weatherService.getWeather(event.target.value);

      setWeather(weatherData);
      const weatherObj: Weather = {
        ...weatherData,
        searchData: new Date().toLocaleString(),
      };
      saveToLocalStorage(weatherObj);
    } catch (e) {
      alert(e);
    } finally {
      setIsloading(false);
    }
  }
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://data.gov.il/api/3/action/datastore_search?resource_id=8f714b6f-c35c-4b40-a0e7-547b675eee0e&limit=1500",
        );
        setCitys(response.data.result.records);
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  return (
    <div className="Home d-flex flex-column align-items-center">
      <div className="w-75">
        <select
          className="form-select"
          name="select"
          id="1"
          onChange={getWeather}
          defaultValue={""}
        >
          <option disabled value="">
            select city...
          </option>
          {Citys.map((e) => {
            return (
              <option key={`${e.city_name_en}`} value={`${e.city_name_en}`}>
                {e.city_name_en}
              </option>
            );
          })}
        </select>
      </div>
      <div className="">
        {weather && (
          <div className="w-100   p-3">
            <CardBody className="">
              <p className="p-3 m-0">
                <img
                  src={`
                https:${weather.current.condition.icon}`}
                  alt=""
                />
              </p>
              <p className="p-3 m-0">Country: {weather.location.country}</p>
              <p className="p-3 m-0">City: {weather.location.name}</p>
              <p className="p-3 m-0">Temp: {weather.current.temp_c}</p>
              <p className="p-3 m-0">wind speed: {weather.current.wind_kph}</p>
              <p className="p-3 m-0">{weather.current.condition.text}</p>
            </CardBody>
          </div>
        )}
        {!weather && <h3 className="m-5">D'ont selected city...</h3>}
      </div>
    </div>
  );
}

export default Home;
