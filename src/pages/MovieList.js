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
      data: false,
    };
  }

  componentDidMount() {
    this.responseApi();
  }

  responseApi = async () => {
    const response = await movieAPI.getMovies();
    this.setState(() => ({
      movies: response,
      data: true,
    }));
  }

  render() {
    const { data, movies } = this.state;
    // Render Loading here if the request is still happening
    if (data === false) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
