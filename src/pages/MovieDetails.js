import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
      redirect: false,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
  }

  componentDidMount() {
    // pega id pela URL
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((res) => this.setState({ movie: res, loading: false }));
  }

  deleteMovie(e) {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id).then((res) => this.setState({ movie: res }));
    e.preventDefault();
    this.setState({ redirect: true });
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
    const { match: { params: { id } } } = this.props;
    const { loading, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : this.renderMovie() }
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
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
