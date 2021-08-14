import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    movieAPI.getMovies()
      .then((resolve) => this.setState({ movies: resolve, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;
    const carregamento = <Loading />;
    const arrayMovies = movies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    return (
      <div data-testid="movie-list">
        { loading ? carregamento : arrayMovies }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
