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
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    movieAPI.getMovie(id).then((resolve) => this.setState({
      movie: resolve,
      loading: false,
    }));
  }

  render() {
    const { movie, loading } = this.state;
    const { title, subtitle, imagePath, storyline, genre, rating, id } = movie;

    if (loading === true) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">

        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>

        <button type="button">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </button>

        <button type="button">
          <Link to="/">VOLTAR</Link>
        </button>

      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieDetails;
