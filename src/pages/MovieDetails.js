import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
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

  async deleteMovie(id) {
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details" className="cards">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="container-btns">
          <Link to={ `/movies/${id}/edit` } className="btn-links"> EDITAR </Link>
          <Link to="/" onClick={ () => this.deleteMovie(id) } className="btn-links"> DELETAR </Link>
          <Link to="/" className="btn-links"> VOLTAR </Link>
        </div>
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
