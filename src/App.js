import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import corona from "./images/image.png";

export class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const info = await fetchData();
    this.setState({ data: info });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
    console.log(fetchedData);
  };
  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} alt="covide-19" src={corona} />
        <Cards data={data} />

        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
