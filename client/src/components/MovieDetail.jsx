import React from 'react'
import MovieComponent from './MovieComponent';

class MovieDetail extends React.Component {

  render() {
    if (!this.props.movies) {
      return null;
    }
    var movies = this.props.movies.map((movie, index) => {
      return ( 
        <div key = { movie.imdbID } >
          <h3 > { movie.Title } </h3>
          <p> { movie.Year } </p>
          <img src = { movie.Poster }
          /> 
        </div>
        )
    });

    return ( 
      <MovieComponent movie = { movies }
      />
      )
  }
}

export default MovieDetail;