import { useState } from "react";
import "./index.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=126e301bf03e93ac7508fea171ce4fa1`;

  const searchLoc = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
          onKeyPress={searchLoc}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">{data.name}</div>
          {console.log(data.main)}
          <div className="temp">
            {data.main ? <h1>{Math.round(data.main.temp)}°C</h1> : null}
          </div>
          <div className="description">
            {data.main ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>Feels Like</p>
            {data.main ? (
              <p className="bold">{Math.round(data.main.feels_like)}°C</p>
            ) : null}
          </div>
          <div className="humidity">
            <p>Humidity</p>
            {data.main ? <p className="bold">{data.main.humidity}</p> : null}
          </div>
          {/* <div className="wind">
          <p>Wind Speed</p>
            <p className="bold">30kph</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
