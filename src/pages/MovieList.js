import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({ loading: true },
      async () => {
        const getMovies = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: getMovies,
        });
      });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list" className="slide-container">
          {movies.map((movie) => (<MovieCard
            key={ movie.title }
            movie={ movie }
            next={ this.nextOrPreviousImg }
            atualizaState={ this.setSlidesState }
            show={ this.showImg }
          />))}
        </div>
      </>
    );
  }
}

export default MovieList;
