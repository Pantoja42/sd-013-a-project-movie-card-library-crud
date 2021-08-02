import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
    this.showMovie = this.showMovie.bind(this);
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

  showMovie() {
    const { movie } = this.state;
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
      </>
    );
  }

  render() {
    const { state: { loading }, showMovie } = this;
    const renderList = loading ? <Loading /> : showMovie();
    return (
      <div data-testid="movie-details">
        {renderList}
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default withRouter(MovieDetails);
