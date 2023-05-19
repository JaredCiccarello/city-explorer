import React from 'react';
import Card from 'react-bootstrap/Card';

class MovieDay extends React.Component {
  render() {
    return (
      <>
        <Card.Title>Great Movies in: {this.props.cityName}</Card.Title>
        {/* <hr /> */}

        {/* {this.props.movieData.map ? (
            this.props.movieData.map((movie, idx) =>  */}
            <Card key={this.props.idx}>
              <Card.Text>Title: {this.props.movie.title}</Card.Text>
              <Card.Text>Overview: {this.props.movie.overview}</Card.Text>
              <Card.Text>Average # of Votes: {this.props.movie.averageVotes}</Card.Text>
              <Card.Text>Total # of Votes: {this.props.movie.totalVotes}</Card.Text>
                <Card.Img
                 src={`https://image.tmdb.org/t/p/w500${this.props.movie.image_url}`}
               />
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

export default MovieDay;