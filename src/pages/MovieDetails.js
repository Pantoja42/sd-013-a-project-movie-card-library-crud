import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

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
    this.setState({ loading: true }, async () => {
      const { match: { params: { id } } } = this.props;
      const requestMovie = await movieAPI.getMovie(id);

      this.setState({
        movie: requestMovie,
        loading: false,
      });
    });
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
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
