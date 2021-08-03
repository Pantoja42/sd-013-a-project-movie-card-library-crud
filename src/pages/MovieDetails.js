import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleDelete(movie) {
    const { id } = movie;
    await movieAPI.deleteMovie(id);
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const requestedMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: requestedMovie,
      loaded: true,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loaded } = this.state;
    const renderMovieOrLoading = () => {
      if (loaded) {
        if (movie === undefined) {
          return (
            <p>erro</p>
          );
        }
        const { id, imagePath, title, subtitle, storyline, genre, rating } = movie;
        return (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ title }</p>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to="/">VOLTAR</Link>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link
              to="/"
              onClick={ () => this.handleDelete(movie) }
            >
              DELETAR
            </Link>
          </div>
        );
      }
      return (
        <Loading />
      );
    };
    return (
      renderMovieOrLoading()
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
