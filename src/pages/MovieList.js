import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    this.setState({
      loading: true,
    });

    const data = await movieAPI.getMovies();

    this.setState({
      loading: false,
      movies: data,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div>
        { loading ? (<Loading />) : (
          <div>
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
            <div data-testid="movie-list">
              { movies.map((movie) => (
                <MovieCard key={ movie.title } movie={ movie } />
              )) }
            </div>
          </div>
        ) }
      </div>
    );
  }
}

export default MovieList;
