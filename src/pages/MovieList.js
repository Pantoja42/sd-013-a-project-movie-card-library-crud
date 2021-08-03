import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  // Função feita com ajuda da monitoria
  componentDidMount() {
    movieAPI.getMovies().then((res) => this.setState({ movies: res, isLoading: false }));
  }

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {isLoading && <Loading />}
        <nav>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </nav>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
