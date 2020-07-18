import React from 'react';
import axios from 'axios';
import './App.css';


function getWOEID(city) {
  return axios.get("api/location/search?query=" + city);
}

function getWeather(WOEID) {
  return axios.get("api/location/" + WOEID + "/");
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { weather: null };
  }

  render() {
    var weather = this.state.weather


    return (
      <div className='container'>
        <input type="text" placeholder="Enter the City" onChange={(e) => {
            var city = e.target.value;
            getWOEID(city).then(response => {
              var data = response.data;
              if (data.length > 0) {
                var WOEID = data[0]["woeid"];
                getWeather(WOEID).then(response => {
                  var weather = response.data;
                  console.log(weather);
                  this.setState({weather:weather});
                })
              }
            })
        }} />
        {this.state.weather == null ? (<h4> Weather is loading </h4>) :<div>
          <h3 className="bg-danger"> WEATHER: </h3>
            <ul className="bg-danger">
              {this.state.weather.map(<li className='list-group-item'>{weather}</li>)}
            </ul>
          </div>}
      </div>
    );
  }
}

export default App;
