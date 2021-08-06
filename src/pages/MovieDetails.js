import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((data) => this.setState({
        loading: false,
        movie: data,
      }));
  }

  render() {
    const { movie, loading } = this.state;
    // Change the condition to check the state
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <p>{ `Title: ${movie.title}` }</p>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        <br />
        <Link to="/">VOLTAR</Link>
        <br />
        <Link to="/" onClick={ () => movieAPI.deleteMovie(movie.id) }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({ params: PropTypes.objectOf(PropTypes.string) }).isRequired,
};

export default MovieDetails;
