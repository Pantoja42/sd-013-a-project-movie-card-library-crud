import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      load: true,
      movie: {},
    };
  }

  componentDidMount() {
    console.log(this.movie);
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => {
      // console.log(data);
      this.setState({
        movie,
        load: false,
      });
    });
  }

  render() {
    // Change the condition to check the state
    const { movie: { title, storyline, imagePath, genre, rating, subtitle, id }, load } = this.state;
    if (load) return <Loading />;

    return (
      <div data-testid="movie-details">
        {/* {load && <Loading/>} */}
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
