import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    
    this.state = {
      movies: [],
    };
  }
  
  componentDidMount() {
    // com a ajuda do Vinicius Dionysio e Sugano na monitoria
    const { getMovies } = movieAPI;
    getMovies().then((list) => {
      this.setState({ movies: list });
    })
  }

  render() {
    const { movies } = this.state;

    if (this.state.movies.length === 0) {
      return (
        <Loading />
      );
    }
    
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
