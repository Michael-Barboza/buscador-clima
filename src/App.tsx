import styles from "./App.module.css";
import Form from "./components/Form/Form";
import useWeather from "./components/hooks/useWeather";
import WeatherDilail from "./components/WeatherDetail/WeatherDetail";

const App = () => {
  const { weather, fetchWeather, hasWeatherData } = useWeather();
  return (
    <>
      <h1 className={styles.title}> Buscando el Clima</h1>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />

        {hasWeatherData && <WeatherDilail weather={weather} />}
      </div>
    </>
  );
};

export default App;
