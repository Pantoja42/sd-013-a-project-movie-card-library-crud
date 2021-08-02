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
      isLoading: true,
    };
  }

  componentDidMount() {
    this.requestFunc();
  }

  requestFunc = async () => {
    const { match: { params: { id } } } = this.props;
    const movieFound = await movieAPI.getMovie(id);

    this.setState({ isLoading: true }, () => {
      this.setState({
        movie: movieFound,
        isLoading: false,
      });
    });
    return movieFound;
  }

  render() {
    const { isLoading, movie: movieState } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movieState;
    const movie = (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ `Title: ${title}` }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );

    return (
      <div>
        {(isLoading) ? <Loading /> : movie}
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
