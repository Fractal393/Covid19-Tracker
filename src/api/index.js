import axios from "axios";

const url = "https://covid19.mathdro.id/api";

//number of cases
export const fetchData = async country => {
  let newurl = url;

  if (country) {
    newurl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(newurl);
    return { confirmed, recovered, deaths, lastUpdate }; //returning specific data required excluding the latter
  } catch (error) {
    console.log(error);
  }
};

//daily data for plotting of graphs
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

//All Countries
export const fetchCountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${url}/countries`);

    return countries.map(country => country.name);
  } catch (error) {
    console.log(error);
  }
};
