import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.requestDetails();
  }

  requestDetails = async () => {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    const requestResult = await getMovie(id);
    this.setState({
      movie: requestResult,
      loading: false,
    });
  }

  removeMovie = async () => {
    const { deleteMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    await deleteMovie(id);
  }

  render() {
    const { loading,
      movie: { title, storyline, imagePath, genre, rating, subtitle } } = this.state;
    console.log(this.state);
    const { match: { params: { id } } } = this.props;

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <h4>{ title }</h4>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <button type="submit">
          <Link to={ `/movies/${id}/edit` }>
            EDITAR
          </Link>
          <Link to="/">
            DELETAR
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
  }),
};
MovieDetails.defaultProps = {
  match: {
    params: {
      id: 0,
    },
  },

};

export default MovieDetails;
