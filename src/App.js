import React from "react";
import "./styles.css";
import { Cards, Chart, Country } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import pic from "./image/word.png";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async country => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={pic} alt="Covid-19" />
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
