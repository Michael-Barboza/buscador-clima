import { countries } from "../../data/countries"
import styles from './Form.module.css'

const Form = () => {
  return (
    <form className={styles.from}>
       <div className={styles.filed}>
        <label htmlFor="country">País: {''}</label>
        <select id="country" name="country">
          <option value="">Selecciona un país</option>
          {countries.map(country => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className={styles.filed}>
        <label htmlFor="city">Ciudad: {''}</label>
        <input 
        id="city"
        type="text"
        name="city"
        placeholder="Ingresa una ciudad"
        />
      </div>
     
      <button type="submit">Consultar Clima</button>
    </form>
  )
}

export default Form