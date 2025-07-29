import styles from "./App.module.css";
import Form from "./components/Form/Form";
import useWeather from "./components/hooks/useWeather";


const App = () => {
  const { fetchWeather } = useWeather();
  return (
    <>
      <h1 className={styles.title}> Buscando el Clima</h1>

      <div className={styles.container}>
        <Form
        fetchWeather={fetchWeather}
        />
        <p>2</p>
      </div>
    </>
  );
};

export default App;
