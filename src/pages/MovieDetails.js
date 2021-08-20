import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
    };
    this.requestChangeState = this.requestChangeState.bind(this);
  }

  componentDidMount() {
    this.requestChangeState();
  }

  async requestChangeState() {
    const { match: { params: { id } } } = this.props;
    const eachMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: eachMovie,
      loading: false,
    });
  }

  render() {
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, id, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        {loading
          ? <Loading />
          : (
            <section>
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{ `Title: ${title}` }</p>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
              <Link to="/"> VOLTAR </Link>
            </section>)}
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
