import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

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
    this.FetchMovies();
  }

  FetchMovies = async () => {
    try {
      const movies = await movieAPI.getMovies();
      this.setState({ movies, loading: false });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div className="movie-list-container" data-testid="movie-list">
        { loading ? <Loading />
          : (
            <>
              <div className="movie-list">
                {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
              </div>
              <Link className="add-movie-btn" to="movies/new">ADICIONAR CARTÃO</Link>
            </>
          )}
      </div>
    );
  }
}

export default MovieList;
