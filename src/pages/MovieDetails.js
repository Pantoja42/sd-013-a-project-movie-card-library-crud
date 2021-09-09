import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      filme: {},
    };
    this.resolveGetMovie = this.resolveGetMovie.bind(this);
    this.btnDelete = this.btnDelete.bind(this);
  }

  componentDidMount() {
    this.resolveGetMovie();
  }

  buildMovieCard = (filme) => {
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id,
    } = filme;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.btnDelete(id) }>DELETAR</Link>
      </div>
    );
  }

  async btnDelete(id) {
    await movieAPI.deleteMovie(id);
  }

  async resolveGetMovie() {
    const { match: { params: { id } } } = this.props;
    const filme = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      filme,
    });
  }

  render() {
    const { loading, filme } = this.state;
    return (
      loading ? <Loading /> : this.buildMovieCard(filme)
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
