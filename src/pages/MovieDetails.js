import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import NotFound from './NotFound';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.FetchMovie();
  }

  FetchMovie = async () => {
    try {
      const { match } = this.props;
      const { id } = match.params;
      const movie = await movieAPI.getMovie(id);
      this.setState({ movie, loading: false });
    } catch (err) {
      console.error(err);
    }
  }

  Content = (movie) => {
    // return NotFound component if movie id doesnt exist in the database.
    if (!movie) return <NotFound />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { deleteMovie } = movieAPI;

    return (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p className="details-storyline">{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link className="link" to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link className="link" to="/" onClick={ () => deleteMovie(id) }>DELETAR</Link>
        <Link className="link" to="/">VOLTAR</Link>
      </>
    );
  }

  render() {
    const { movie, loading } = this.state;

    return (
      <div className="details-page" data-testid="movie-details">
        { loading ? <Loading /> : this.Content(movie)}
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
