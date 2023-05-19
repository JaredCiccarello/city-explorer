import React from "react";
import WeatherDay from "./WeatherDay";


class Weather extends React.Component {
  render() {

    return (
      <>
        {
          // Not having the key will create an error "child li key" 
          // idx key goes inside here.
          this.props.weatherData.map((forecast, idx) =>
            // <div key = {idx}>
            //   <Card.Text>Date: {forecast.date}</Card.Text>
            //   <Card.Text>Today proves that going outside will be a great idea! {forecast.description}</Card.Text>
            //   <Card.Text>High of: {forecast.high}</Card.Text>
            //   <Card.Text>Low of: {forecast.low}</Card.Text>
            //   <hr></hr>
            // </div>

            // <Col key={idx} className="mt-4"></Col>
            <WeatherDay forecast = {forecast}
            key={idx}/>
          )
        }
      </>


    )
  }
}


export default Weather
