import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  // https://www.valentinog.com/blog/await-react/
  async componentDidMount() {
    const response = await movieAPI.getMovie();
    console.log(response);
    const json = await response.json();
    this.setState({
      movies: json,
      isLoading: false,
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        { isLoading && <Loading /> }
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
