import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };

    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    this.changeState();
  }

  async changeState() {
    const { match: { params: { id } } } = this.props;
    const oneMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: oneMovie,
      loading: false,
    });
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        {loading
          ? <Loading />
          : (
            <div>
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{ `Title: ${title}` }</p>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
            </div>)}
      </div>
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
