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
      id: props.match.params.id,
      movie: '',
    };

    this.getList = this.getList.bind(this);
    this.deleteMovieId = this.deleteMovieId.bind(this);
  }

  componentDidMount() {
    this.getList();
  }

  async getList() {
    const { id } = this.state;
    const idMovie = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie: idMovie,
    });
  }

  async deleteMovieId() {
    const { id } = this.state;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const { loading, id } = this.state;

    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <p>{ `Título:${movie.title}`}</p>
        <p>{ `Subtítulo:${movie.subtitle}`}</p>
        <p>{ `Sinopse:${movie.storyline}`}</p>
        <p>{ `Gênero:${movie.genre}`}</p>
        <p>{ `Avaliação:${movie.rating}`}</p>
        <button type="button"><Link to="/">VOLTAR</Link></button>
        <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
        <button
          type="button"
          onClick={ this.deleteMovieId }
        >
          <Link to="/">DELETAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

MovieDetails.defaultProps = {
  match: {},
};

export default MovieDetails;
