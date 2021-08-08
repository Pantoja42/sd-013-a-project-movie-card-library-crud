import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
    movieAPI.getMovie(id).then((data) => {
      this.setState({
        movie: data,
        loading: false,
      });
    });
  }

  render() {
    const { movie, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    const {
      title,
      id,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>
          { `Title: ${title}` }
        </h3>
        <p>
          { `Subtitle: ${subtitle}` }
        </p>
        <p>
          { `Storyline: ${storyline}` }
        </p>
        <p>
          { `Genre: ${genre}` }
        </p>
        <p>
          { `Rating: ${rating}` }
        </p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
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
