import React from "react";
import MovieDay from "./MovieDay";

class Movie extends React.Component {
  render() {
    
    return (
      <>
        {
          this.props.movieData.map((movie, idx) =>
            // <div key={index}>
            //   <Card.Text>Title: {movie.title}</Card.Text>
            //   <Card.Text>Overview: {movie.overview}</Card.Text>
            //   <Card.Text>Average # of Votes: {movie.averageVotes}</Card.Text>
            //   <Card.Text>Total # of Votes: {movie.totalVotes}</Card.Text>
            //   <Card.Img
            //     src={`https://image.tmdb.org/t/p/w500${movie.image_url}`}
            //   />
            //   <Card.Text>Popularity Level: {movie.popularity}</Card.Text>
            //   <Card.Text>Release Date: {movie.releaseDate}</Card.Text>
            //   <hr></hr>
            // </div>

            <MovieDay movie = {movie}
            key={idx}/>
          )
        }
      </>


    )
  }
}


export default Movie