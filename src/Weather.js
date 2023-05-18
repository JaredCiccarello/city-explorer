import React from "react";
import Card from 'react-bootstrap/Card'


class Weather extends React.Component {
  render() {
    return (
      <>
          <Card.Title>Weather in {this.props.cityName}</Card.Title>
          <hr></hr>
        {
          // Not having the key will create an error "child li key" 
          // idx key goes inside here.
          this.props.weatherData.map((forecast, idx) =>
            <div key = {idx}>
              <Card.Text>Date: {forecast.date}</Card.Text>
              <Card.Text>Don't forget to touch grass {forecast.description}</Card.Text>
              <Card.Text>High of: {forecast.high}</Card.Text>
              <Card.Text>Low of: {forecast.low}</Card.Text>
              <hr></hr>
            </div>
          )
        }
      </>


    )
  }
}


export default Weather