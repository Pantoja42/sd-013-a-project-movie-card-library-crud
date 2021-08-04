import React, { Component } from 'react';
import { MovieCard, Loading } from '../components'
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading:true,
    };

    this.fetchGetMovie = this.fetchGetMovie.bind(this);

  }
  
  async fetchGetMovie() {
    const requestGetMovie = await movieAPI.getMovies();
    this.setState({
      movies: requestGetMovie,
      loading:false,
    })
  }

  componentDidMount() {
    this.fetchGetMovie();
  }

  render() {
    const { movies, loading } = this.state;
    return ( 
      <div data-testid="movie-list">
        {loading ? <Loading /> 
        : movies.map((movie) => 
        <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
