import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  async componentDidMount(){
    const movieList = await movieAPI.getMovies();
    this.setState({ movies: movieList })
  }

  render() {
    const { movies } = this.state;
    const movieList = movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    if ( movieList.length === 0 ) return <Loading />;

    return (
      <div data-testid="movie-list">
        {  movieList }
        < Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
