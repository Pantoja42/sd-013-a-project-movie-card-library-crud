import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };
    this.FetchApi = this.FetchApi.bind(this);
  }

  componentDidMount() {
    this.FetchApi();
  }

  async FetchApi() {
    const movies = await movieAPI.getMovies();
    this.setState({ movies, loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        { loading ? <Loading />
          : (
            <div>
              <div>
                {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
              </div>
              <p> </p>
              <Link to="movies/new">ADICIONAR CARTÃO</Link>
            </div>
          )}
      </div>
    );
  }
}

export default MovieList;
