import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

/* import * as movieAPI from '../services/movieAPI'; */

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      load: false,
    };
    // Tornando a função LoadMovies possível ser chamada pelo "this"
    this.LoadMovies = this.LoadMovies.bind(this);
  }

  componentDidMount() {
    this.LoadMovies();
  }

  // Requisita a Lista de Filmes e atualiza os estados das chaves movies e load.
  async LoadMovies() {
    const request = await movieAPI.getMovies();
    this.setState({
      movies: request,
      load: true,
    });
  }

  render() {
    const { movies, load } = this.state;
    return (
      <div data-testid="movie-list">
        {load ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading />}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
