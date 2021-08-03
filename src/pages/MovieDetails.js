import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import './MovieDetails.css';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.FetchMovie();
  }

  FetchMovie = async () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true });
    const response = await movieAPI.getMovie(id);
    this.setState({ loading: false, movie: response });
    console.log(response);
  };

  render() {
    const { match: { params: { id } } } = this.props;
    const { loading } = this.state;
    if (loading) return <Loading />;
    const {
      movie: {
        title,
        storyline,
        imagePath,
        genre,
        rating,
        subtitle },
    } = this.state;

    return (
      <section>
        <div
          className="movie-details"
          data-testid="movie-details"
        >
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div
          className="links"
        >
          <Link
            to={ `/movies/${id}/edit` }
          >
            EDITAR
          </Link>
          <Link
            to="/"
          >
            VOLTAR
          </Link>
        </div>
      </section>

    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieDetails;
