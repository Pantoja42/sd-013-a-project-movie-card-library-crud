import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import '../components/Add-card.css';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      movies: [],
    };
  }

  componentDidMount() {
    this.FetchMovies();
  }

  FetchMovies = async () => {
    this.setState({ loading: true });
    const response = await movieAPI.getMovies();
    this.setState({ loading: false, movies: response });
  };

  render() {
    const { movies, loading } = this.state;
    console.log(movies);
    const loadingElement = <h1>Carregando...</h1>;
    if (loading) return loadingElement;
    return (
      <section>
        <div
          data-testid="movie-list"
        >
          {movies
            .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <div className="add-card">
          <Link
            to="/movies/new"
          >
            ADICIONAR CARTÃO
          </Link>
        </div>
      </section>
    );
  }
}

export default MovieList;
