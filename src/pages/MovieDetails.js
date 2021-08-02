import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie = () => {
    this.setState({
      loading: true,
    }, async () => {
      const data = await movieAPI.getMovies();
      const movie = this.findMovieId(data);
      this.setState({
        loading: false,
        movie,
      });
    });
  }

  findMovieId = (movies) => {
    const { match: { params: { id } } } = this.props;
    return movies.find((movie) => movie.id === Number(id));
  }

  render() {
    // Change the condition to check the state
    const { loading } = this.state;
    if (loading) return <Loading />;

    const { movie:
      { title, storyline, imagePath, genre, id, rating, subtitle } } = this.state;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{title}</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link
          to="/"
          onClick={ async () => { await movieAPI.deleteMovie(id); } }
        >
          DELETAR
        </Link>
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
