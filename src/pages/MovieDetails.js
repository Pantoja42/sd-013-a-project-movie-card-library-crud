import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { objectOf } from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((movie) => {
        this.setState({ movie, loading: false });
      });
  }

  deleteMovie = () => {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id)
      .then();
  }

  render() {
    const { movie, loading } = this.state;
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (loading) {
      return (<Loading />);
    }
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{ title }</h3>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link
          onClick={ this.deleteMovie }
          to="/"
        >
          DELETAR

        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: objectOf(PropTypes.any).isRequired,
};

export default MovieDetails;
