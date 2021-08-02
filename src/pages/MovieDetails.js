import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
    this.showMovie = this.showMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    // console.log(this.props);
    const { match: { params: { id } } } = this.props;
    movieAPI
      .getMovie(id)
      .then((data) => {
        this.setState({ movie: data, loading: false });
      });
  }

  deleteMovie(id) {
    movieAPI
      .deleteMovie(id)
      .then(() => {
        this.setState({ shouldRedirect: true });
      });
  }

  showMovie() {
    const { state: { movie }, deleteMovie } = this;
    const { id, title, subtitle, storyline, genre, rating, imagePath } = movie;
    return (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <p><Link to={ `/movies/${id}/edit` }>EDITAR</Link></p>
        <p><button type="button" onClick={ () => deleteMovie(id) }>DELETAR</button></p>
      </>
    );
  }

  render() {
    const { state: { loading, shouldRedirect }, showMovie } = this;
    const renderList = loading ? <Loading /> : showMovie();
    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }
    return (
      <div data-testid="movie-details">
        {renderList}
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(MovieDetails);
