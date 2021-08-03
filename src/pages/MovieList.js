import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.stopLoading = this.stopLoading.bind(this);
  }

  async componentDidMount() {
    const arrMovies = await movieAPI.getMovies();
    this.stopLoading();
    this.sendingMovies(arrMovies);
  }

  stopLoading = () => this.setState(() => ({
    loading: false,
  }));

  sendingMovies = (param) => {
    this.setState(() => ({
      movies: param,
    }));
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    if (loading === true) return <Loading />;

    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">
          ADICIONAR CARTÃO
        </Link>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
