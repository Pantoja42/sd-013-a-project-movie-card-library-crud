import React, { Component } from 'react';
import './MovieList.css';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((data) => {
      this.setState({
        movies: data,
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    const movieCards = (
      <div data-testid="movie-list">
        <div className="container-add-card">
          <Link className="add-card" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );

    return (
      <div>
        {loading ? <Loading /> : movieCards}
      </div>
    );
  }
}

export default MovieList;
