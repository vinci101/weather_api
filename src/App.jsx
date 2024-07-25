import { useState } from "react";
import "./index.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${
    import.meta.env.VITE_API_KEY
  }`;

  const searchLoc = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  const { main, weather } = data;

  const undef = () => {
    if (main === undefined) {
      console.log("de");
    }
    return main;
  };

  // const { temp } = undef();
  // console.log(main);
  console.log(undef());
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
          <div className="temp">
            {data.main ? <h1>{Math.round(data.main.temp)}°C</h1> : null}
          </div>
          <div className="description">
            {data.main ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name != undefined && (
          <div className="bottom">
            <div className="feels">
              <p>Feels Like</p>
              {data.main ? (
                <p className="bold">{Math.round(data.main.feels_like)}°C</p>
              ) : null}
            </div>
            <div className="humidity">
              <p>Humidity</p>
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            </div>
            {/* <div className="wind">
          <p>Wind Speed</p>
            <p className="bold">30kph</p>
          </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
