import React, { Component } from 'react';
import { MovieCard ,Loading } from '../components';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
    
    this.fetchMovie = this.fetchMovies.bind(this);
  }

  async fetchMovies() {
    // movieAPI.getMovies()
    //   .then((data) => (
    //     this.setState({
    //       movies: data,
    //     })
    //   ))
    const moviesData = await movieAPI.getMovies();

    this.setState({
      movies: moviesData,
    })
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies } = this.state;
    const isEmptyMovies = (movies.length === 0);
    const successfulPageContent = (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );

    return (
      isEmptyMovies ? <Loading /> : successfulPageContent
    );
  }
}

export default MovieList;
