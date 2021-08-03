import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    this.addMovie();
  }

  async addMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState({
      movie: await movieAPI.getMovie(id),
    });
    this.setState({
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { match: { params: { id } } } = this.props;
    const { loading, movie:
      { title, storyline, imagePath, genre, rating, subtitle } } = this.state;

    const divfilme = (
      <div data-testid="movie-details">
        <p>{title}</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>);
    return (
      loading ? <Loading /> : divfilme
    );
  }
}
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
export default MovieDetails;
