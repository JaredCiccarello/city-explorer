import React from 'react';
import Card from 'react-bootstrap/Card';


class WeatherDay extends React.Component {
  render() {
    return (
      <>
        {/* <Card.Title>Weather in: {this.props.cityName}</Card.Title>
       

        {this.props.weatherData.map ? (
            this.props.weatherData.map((forecast, idx) =>  */}
            <Card key={this.props.idx}>
                <Card.Text>Date: {this.props.forecast.date}</Card.Text>
                <Card.Text>Forecast: {this.props.forecast.description}</Card.Text>
                <Card.Text>High of: {this.props.forecast.high}</Card.Text>
                <Card.Text>Low of: {this.props.forecast.low}</Card.Text>

            </Card>
        {/* )
       ) : (
        <p>loading data:</p>
       )
       } */}
      </>
    );
  }
}

export default WeatherDay;