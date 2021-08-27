import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

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
      });
    });
  }

  render() {
    const { movies, load } = this.state;
    if (load) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies
          .map((movieItem) => <MovieCard key={ movieItem.title } movie={ movieItem } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
