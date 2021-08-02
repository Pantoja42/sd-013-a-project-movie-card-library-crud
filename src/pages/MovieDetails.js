import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.getMovie = this.getMovie.bind(this);

    this.state = {
      movie: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getMovie(id);
  }

  getMovie(movieId) {
    movieAPI.getMovie(movieId)
      .then((response) => {
        this.setState({
          movie: response,
          isLoading: false,
        });
      });
  }

  deleteMovie(movieId) {
    movieAPI.deleteMovie(movieId);
  }

  render() {
    const {
      movie: {
        title,
        storyline,
        imagePath,
        genre,
        rating,
        subtitle,
      },
      isLoading,
    } = this.state;

    const { match: { params: { id } } } = this.props;

    // Change the condition to check the state
    if (isLoading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Título: ${title}` }</p>
        <p>{ `Subtítulo: ${subtitle}` }</p>
        <p>{ `Sinopse: ${storyline}` }</p>
        <p>{ `Gênero: ${genre}` }</p>
        <p>{ `Avaliação: ${rating}` }</p>
        <Link to="/" className="rating">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` } className="rating">EDITAR</Link>
        <Link to="/#" onClick={ () => this.deleteMovie(id) } className="rating">
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default MovieDetails;
