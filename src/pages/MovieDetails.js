import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      isLoading: true,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  // Função feita com ajuda de Luiza Antiques
  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      isLoading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, isLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    // const { match: { params: { id } } } = this.props;

    return (
      <div data-testid="movie-details">
        { isLoading && <Loading /> }
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ `Subtitle: ${title}` }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

// Validação feita com ajuda de Pedro Delicoli
MovieDetails.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
