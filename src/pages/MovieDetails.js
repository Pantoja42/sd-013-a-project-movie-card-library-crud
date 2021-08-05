import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
      infoLoading: true,
    };
  }

  componentDidMount() {
    this.movieInside();
  }

  movieInside = async () => {
    const { match: { params: { id } } } = this.props;
    const movieDetails = await movieAPI.getMovie(id);
    this.setState({ infoLoading: true }, () => {
      this.setState({
        movie: movieDetails,
        infoLoading: false,
      });
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, infoLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    const movieRender = (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ 'Title: $4{title}' }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ '/movies/${id}/edit' }>EDITAR</Link>
      </div>
    );

    return (
      <div>
        {infoLoading ? <Loading />: movieRender}
      </div>
    );
  }
}

MovieDetails.PropTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired
};

export default MovieDetails;
