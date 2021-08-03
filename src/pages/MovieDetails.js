import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      filme: {},
    };
    this.resolveGetMovie = this.resolveGetMovie.bind(this);
    this.deletarFilmes = this.deletarFilmes.bind(this);
  }

  componentDidMount() {
    this.resolveGetMovie();
  }

  async resolveGetMovie() {
    const { match: { params: { id } } } = this.props;
    const filme = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      filme,
    });
  }

  async deletarFilmes(id) {
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { filme, loading } = this.state;
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id } = filme;
    const pikxu = (
      <div data-testid="movie-details" className="movie-card">
        <img className="movie-card-image" alt="Movie Cover" src={ `../${imagePath}` } />
        <p className="movie-card-title">{ title }</p>
        <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p className="rating">{ `Rating: ${rating}` }</p>
        <Link to="/" className="botao">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` } className="botao">EDITAR</Link>
        <Link
          to="/"
          onClick={ () => this
            .deletarFilmes(id) }
          className="botao"
        >
          DELETAR
        </Link>
      </div>
    );

    return (
      loading ? <Loading /> : pikxu
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
