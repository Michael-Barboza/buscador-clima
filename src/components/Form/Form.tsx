import { countries } from "../../data/countries";
import styles from "./Form.module.css";
import  { useState, type ChangeEvent, type FormEvent } from "react";
import type{ SearchType } from "../../types";
import Alert from "../Alert/Alert";

type FormProps = {
  fetchWeather: () => void;
};

const Form = ( {fetchWeather} :FormProps ) => {
  const [search, setSearch] = useState<SearchType>({
    country: "",
    city: "",
  });
  const [alert, setAlert] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSumit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }
    fetchWeather();
  }


  return (
    <form 
    className={styles.from}
    onSubmit={handleSumit}
    >
      {alert && <Alert>{alert}</Alert>}
      <div className={styles.filed}>
        <label htmlFor="country">País: {""}</label>
        <select 
        value={search.country} 
        id="country" 
        name="country"
        onChange={handleChange}
        >
          <option value="">Selecciona un país</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filed}>
        <label htmlFor="city">Ciudad: {""}</label>
        <input
          id="city"
          type="text"
          name="city"
          placeholder="Ingresa una ciudad"
          value={search.city}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Consultar Clima</button>
    </form>
  );
};

export default Form;
