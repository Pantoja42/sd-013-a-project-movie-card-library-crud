import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      infoLoading: true,
    };
  }

  componentDidMount() {
    this.infoMovies();
  }

  infoMovies = async () => {
    const dataMovie = await movieAPI.getMovies();
    this.setState({ infoLoading: true }, () => {
      this.setState((prevState) => ({
        movies: [...prevState.movies, ...dataMovie],
        infoLoading: false,
      }));
    });
  }

  render() {
    const { movies, infoLoading } = this.state;
    const movieCard = (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );

    return (
      <div>
        {infoLoading ? <Loading /> : movieCard}
      </div>
    );
  }
}
export default MovieList;
