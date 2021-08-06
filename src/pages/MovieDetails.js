import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    this.requestDetais();
  }

  requestDetais = async () => {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    const requestResult = await getMovie(id);
    this.setState({
      movie: requestResult,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie:
      { title, storyline, imagePath, genre, rating, subtitle } } = this.state;
    const { loading } = this.state;

    const { match: { params: { id } } } = this.props;

    const elements = (
      <div data-testid="movie-details">
        <h4>{ title }</h4>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );

    return (
      <div>
        {loading ? <Loading /> : elements }
        <Link to="/">VOLTAR</Link>
        <button type="submit">
          <Link to={ `/movies/${id}/edit` }>
            EDITAR
          </Link>
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
  }).isRequired,
};

export default MovieDetails;
