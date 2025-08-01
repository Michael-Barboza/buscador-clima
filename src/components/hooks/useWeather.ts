import axios from "axios";
import type { SearchType } from "../../types";
import {  z } from "zod";
import { useMemo, useState } from "react";

const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
    pressure: z.number(),
    humidity: z.number(),
  }),
});
const initialState={
  name: "",
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
  },
}
export type Weather = z.infer<typeof Weather>;

export default function useWeather() {
  const [weather, setWeather] = useState<Weather>(initialState);
  const[loading, setLoading] = useState(false);

  const fetchWeather = async (search: SearchType) => {
    const appId = import.meta.env.VITE_API_KEY;
         setLoading(true);
         setWeather(initialState);
    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
      const { data } = await axios.get(geoUrl);

      const lat = data[0].lat;
      const lon = data[0].lon;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`;
      const { data: weatherResult } = await axios.get(weatherUrl);
      const result = Weather.safeParse(weatherResult);
      if (result.success) {
        setWeather(result.data);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }finally {
      setLoading(false);
    }
  };

  const hasWeatherData = useMemo(()=> weather.name ,[weather])
  return {
    weather,
    loading,
    fetchWeather,
    hasWeatherData
  };
}
