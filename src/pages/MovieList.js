import React, { Component } from 'react';
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
    this.fetchMoviesApi = this.fetchMoviesApi.bind(this);
  }

  componentDidMount() {
    this.fetchMoviesApi();
  }

  fetchMoviesApi = async () => {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies, loading: false,
    });
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        { loading ? <Loading />
          : (
            <div>
              <div className="movie-list">
                { movies.map((m) => <MovieCard key={ m.title } movie={ m } />) }
              </div>
              <Link className="" to="movies/new">ADICIONAR CARTÃO</Link>
            </div>
          ) }
      </div>
    );
  }
}

export default MovieList;
