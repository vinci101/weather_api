import "./index.css";
const App = () => {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=Manila&appid=126e301bf03e93ac7508fea171ce4fa1`;
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">Caloocan</div>
          <div className="temp">
            <h1>45C</h1>
          </div>
          <div className="description">
            <p>Rain</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">50</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">30%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">30kph</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
