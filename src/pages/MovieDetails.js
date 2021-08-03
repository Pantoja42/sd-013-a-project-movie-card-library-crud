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

    this.renderMovie = this.renderMovie.bind(this);
  }

  componentDidMount() {
    // pega id pela URL
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((res) => this.setState({ movie: res, loading: false }));
  }

  renderMovie() {
    const { loading } = this.state;
    if (loading === false) {
      const { movie } = this.state;
      const { title, storyline, imagePath, genre, rating, subtitle } = movie;
      return (
        <div>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{`Title: ${title}`}</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
      );
    }
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : this.renderMovie() }
        <Link to="/">VOLTAR</Link>
        <Link to="/movies/:id/edit">EDITAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
