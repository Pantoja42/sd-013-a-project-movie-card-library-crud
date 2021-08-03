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
      status: false,
    };
  }

  // ao final da montagem do componente executa a função que ir requerer a resposta da API
  componentDidMount() {
    this.responseApi();
  }

  responseApi = async () => {
    const response = await movieAPI.getMovies();
    this.setState(() => ({
      movies: response,
      status: true,
    }));
  }

  render() {
    const { status, movies } = this.state;
    // Render Loading here if the request is still happening
    if (status === false) {
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
