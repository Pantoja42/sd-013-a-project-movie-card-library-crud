import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    const { match: {params: {id} } } = this.props; movieAPI.getMovie(id)
      .then((data) => this.setState({
        loading: false,
        movie: data,
      }));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie, loading } = this.state;

    return (
      <div data-testid="movie-details">
        {loading
          ? <Loading />
          : <>
            <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
            <p>{ `Title: ${movie.title}` }</p>
            <p>{ `Subtitle: ${movie.subtitle}` }</p>
            <p>{ `Storyline: ${movie.storyline}` }</p>
            <p>{ `Genre: ${movie.genre}` }</p>
            <p>{ `Rating: ${movie.rating}` }</p>
            <Link to={`/movies/${movie.id}/edit`}>EDITAR</Link>
            <br />
            <Link to="/">VOLTAR</Link>
          </>
        }
      </div>
    );
  }
}

export default MovieDetails;
