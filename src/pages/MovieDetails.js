import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: '',
        storyline: '',
        imagePath: '',
        genre: '',
        rating: 0,
        subtitle: '',
        id: 0,
      },
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((response) => {
      this.setState({
        movie: response,
        loading: false,
      });
    });
  }

  render() {
    const { loading, movie } = this.state;
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (loading) return <Loading />;
    return (
      <div className="movie-details" data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <button type="button"><Link to="/">VOLTAR</Link></button>
          <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
        </div>
      </div>
    );
  }
}
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.number,
  }),
}.isRequired;

export default MovieDetails;
