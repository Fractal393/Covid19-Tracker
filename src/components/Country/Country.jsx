import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./Country.module.css";
import { fetchCountries } from "../../api";

const Country = ({ handleCountryChange }) => {
  const [fetchedCountries, setfc] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setfc(await fetchCountries());
    };

    fetchAPI();
  }, [setfc]);

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect
        defaultValue=" "
        onChange={e => handleCountryChange(e.target.value)}
      >
        <option value=""> Global </option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {" "}
            {country}{" "}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Country;
