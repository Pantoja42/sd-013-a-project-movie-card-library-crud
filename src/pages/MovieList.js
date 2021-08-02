import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      load: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((data) => {
      this.setState({
        movies: data,
        load: false,
      })
    })
  }

  render() {
    const { movies, load } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {load && <Loading /> }
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
