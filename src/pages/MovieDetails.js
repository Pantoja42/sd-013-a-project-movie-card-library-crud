import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Loading } from '../components';
import './MovieDetails.css';

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
      <div data-testid="movie-details" className="movie-card-details">
        <div className="container-image">
          <img alt="Movie Cover" src={ `../${imagePath}` } className="image-details" />
        </div>
        <div className="body-details">
          <h2 className="title-details space">{ `Title: ${title}` }</h2>
          <h3 className="subtitle-details space">{ `Subtitle: ${subtitle}` }</h3>
          <p className="storyline-details space">{ `Storyline: ${storyline}` }</p>
          <p className="storyline-details space">{ `Genre: ${genre}` }</p>
          <p className="storyline-details space">{ `Rating: ${rating}` }</p>
          <Link to={ `/movies/${id}/edit` } className="buttons">EDITAR</Link>
          <Link to="/" className="buttons">VOLTAR</Link>
          <Link onClick={ this.deleteMovie } to="/" className="buttons">DELETAR</Link>
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
