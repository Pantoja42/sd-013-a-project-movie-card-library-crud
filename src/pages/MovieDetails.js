import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.renderMovieElement = this.renderMovieElement.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const resultMovie = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: resultMovie,
        });
      },
    );
  }

  renderMovieElement() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    // const { title, storyline, imagePath, genre, rating, subtitle } = {};
    const { loading } = this.state;
    const { match: { params: { id } } } = this.props;

    return (
      <div>
        { loading ? <Loading /> : this.renderMovieElement() }
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
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
