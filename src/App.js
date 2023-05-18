import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Weather from './Weather.js'
import Movie from './Movie.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      haveCityData: false,
      error: false,
      errorMessage: '',
      weatherData: [],
      movieData: [],
      lat: '',
      lon: ''
    }
  }

  // WHEN DEALING WITH AXIOS YOU NEED 3 things:
  // - 1) async
  // - 2) await
  // - 3) .data
  
  handleCitySubmit = async (event) => {
    event.preventDefault();
    
    try {
      let cityUrl = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIO_API_KEY}&q=${this.state.cityName}&format=json`;
      console.log(cityUrl)
      // This gives us city data back
      // Axios is like old school telephone. If you need to get data, you would need to input the correct URL.
      let city = await axios.get(cityUrl);

      // This updates the values of variables in state
      // If there is no variable located here in state, set state will make one for us.
      // If there IS a variable located here in state, set state will update the value for us.
      this.setState({
        Data1: city.data[0],
        error: false,
        haveCityData: true,
        lat: city.data[0].lat,
        lon: city.data[0].lon
        // Adding position zero allows us to choose the inputed data from our users. Right????
      });
      this.getWeather(city.data[0].lat, city.data[0].lon);
      this.getMovies();
    }

    catch (error) {
      console.log('error: ', error);
      console.log('error.message: ', error.message);
      this.setState({
        error: true,
        errorMessage: `Sometimes it takes a wrong turn to get you to the right place, that's not the case here: ${error.response.status}`
      });
    }
  }

  // This works as a function
  // We have to have this in here because ????
  // Try works like an if-else statement
  getWeather = async (lat, lon) => {
    try {
      let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?cityData=${this.state.cityName}&lat=${lat}&lon=${lon}`;
      let weatherResponse = await axios.get(weatherUrl);
      let weatherData = weatherResponse.data;
      this.setState({
        weatherData
      })
      // We set this here to give the user an error once the program identifies a problem.
    } catch (error) {
      console.log('Cloudy with a chance of Meatballs: ', error);
    }
  };


// We created a getMovie arrow function in order to specify how to sort through our object array.
  getMovies = async () => {
    try {
      let movieURL = `${process.env.REACT_APP_SERVER}/movies?cityName=${this.state.cityName}`;
      let movieResponse = await axios.get(movieURL);
      console.log(movieResponse.data)

      this.setState({
        movieData: movieResponse.data
      })
      

    } catch (error) {
      console.log('Error getting movie: ', error);
    }
  };




  changeCityInput = (e) => {
    this.setState({
      cityName: e.target.value
    });
  }
  render() {
    // console.log(this.state)
    return (
      <>
        <header>
          <h1>Data from an API</h1>
          <form onSubmit={this.handleCitySubmit}>
            <label>
              <input name="city" onChange={this.changeCityInput} />
            </label>
            <Button type="submit" className="button">Explore!</Button>
          </form>
        </header>
        {this.state.error ? <p>{this.state.errorMessage}</p> :
          this.state.haveCityData &&
          <main>
            <Card className='City p-2 h-100%' style={{ width: '75%' }}>
              <Card.Body>
                <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIO_API_KEY}&center=${this.state.Data1.lat},${this.state.Data1.lon}&zoom=12`} alt="" />
                <Card.Title>{this.state.cityName}</Card.Title>
                <Card.Text>Lat: {this.state.Data1.lat}</Card.Text>
                <Card.Text>Lon: {this.state.Data1.lon}</Card.Text>
                {this.state.weatherData.length > 0 && <Weather
                  weatherData={this.state.weatherData}
                  cityName={this.state.cityName}
                />}
              </Card.Body>
            </Card>

            <Movie
            movieData = {this.state.movieData}
            cityName = {this.state.cityName}
            />
          </main>

}
      </>
    );
  }
}

export default App;