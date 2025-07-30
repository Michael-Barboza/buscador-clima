import type { Weather } from '../hooks/useWeather';
import styles from './WheatherDetail.module.css';

type WeatherDetailProps = {
  weather: Weather;
};

const WeatherDetail = ({ weather }: WeatherDetailProps) => {
  return (
    <div className={styles.container}>
      <h2>Detalles del clima</h2>
      <p><strong>Ciudad:</strong> {weather.name}</p>
      <p><strong>Temperatura:</strong> {weather.main.temp} °C</p>
      <p><strong>Sensación térmica:</strong> {weather.main.feels_like} °C</p>
      <p><strong>Temperatura mínima:</strong> {weather.main.temp_min} °C</p>
      <p><strong>Temperatura máxima:</strong> {weather.main.temp_max} °C</p>
      <p><strong>Presión:</strong> {weather.main.pressure} hPa</p>
      <p><strong>Humedad:</strong> {weather.main.humidity} %</p>
    </div>
  );
}

export default WeatherDetail;