import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
    };
    this.fetchGetMovie = this.fetchGetMovie.bind(this);
    this.bodyMovieDetails = this.bodyMovieDetails.bind(this);
  }

  componentDidMount() {
    this.fetchGetMovie();
  }

  async fetchGetMovie() {
    const { match: { params: { id } } } = this.props;
    const RequestID = await movieAPI.getMovie(id);
    this.setState({
      movie: RequestID,
      loading: false,
    });
  }

  bodyMovieDetails(movie) {
    const { title, storyline, imagePath,
      genre, rating, subtitle, id } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }

  render() {
    const { loading, movie } = this.state;

    return (
      loading ? <Loading /> : this.bodyMovieDetails(movie)
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
