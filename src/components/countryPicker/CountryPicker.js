import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";

function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setFechedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFechedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFechedCountries]);
  // console.log(fetchedCountries);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">العالمية</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
