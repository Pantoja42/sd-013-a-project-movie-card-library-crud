import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.setApiDetails = this.setApiDetails.bind(this);
    this.removeMovie = this.removeMovie.bind(this);

    this.state = {
      loading: true,
      data: [],
    };
  }

  componentDidMount() {
    this.setApiDetails();
  }

  setApiDetails() {
    this.setState(
      { loading: true },
      () => {
        const { getMovie } = movieAPI;
        const { match: { params: { id } } } = this.props;
        getMovie(id)
          .then((data) => {
            this.setState({
              loading: false,
              data,
            });
          });
      },
    );
  }

  removeMovie() {
    const { deleteMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    deleteMovie(id);
  }

  render() {
    const { loading, data } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = data;

    return (
      loading === true ? <Loading /> : (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={ this.removeMovie }>DELETAR</Link>
        </div>
      )
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
