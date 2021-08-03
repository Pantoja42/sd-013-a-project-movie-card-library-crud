import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };

    this.resolveGetMovies = this.resolveGetMovies.bind(this);
  }

  componentDidMount() {
    this.resolveGetMovies();
  }

  async resolveGetMovies() {
    const filmes = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: filmes,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const addCard = <Link to="/movies/new">ADICIONAR CARTÃO</Link>;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : addCard}
        {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
