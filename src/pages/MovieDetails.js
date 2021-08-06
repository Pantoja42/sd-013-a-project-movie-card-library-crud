import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
      shouldRedirect: false,
    };

    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((data) => {
      this.setState({
        movie: data,
        loading: false,
      });
    });
  }

  deleteMovie() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id).then(() => {
      this.setState({
        shouldRedirect: true,
      });
    });
  }

  render() {
    const { loading, shouldRedirect } = this.state;
    const { movie: {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id } } = this.state;

    if (shouldRedirect === true) {
      return <Redirect to="/" />;
    }

    const movieDetails = (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <div>
          <h2>{ `Title: ${title}` }</h2>
          <h3>{ `Subtitle: ${subtitle}` }</h3>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <div>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
            <Link onClick={ this.deleteMovie } to="/">DELETAR</Link>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        {loading ? <Loading /> : movieDetails}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
