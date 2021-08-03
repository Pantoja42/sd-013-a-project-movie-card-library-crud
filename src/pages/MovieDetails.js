import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(){
    super();

    this.fetchMovieById = this.fetchMovieById.bind(this)
    this.renderDetails = this.renderDetails.bind(this)

    this.state ={
      loading: true,
      movie: {},
    }
  }

  componentDidMount() {
    this.fetchMovieById();
  }

  // Preciso utilizar o id contido nas props do React Router para fazer o fetch
  async fetchMovieById() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      {loading: true},
      async () => {
        const theMovie = await movieAPI.getMovie(id);
        // console.log(theMovie);
        this.setState({
          loading: false,
          movie: { ...theMovie },
        })
      })
  }

  renderDetails() {
    const { movie: { id, title, storyline, imagePath, genre, rating, subtitle } } = this.state;
    return (
        <div>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to="/">VOLTAR</Link>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : this.renderDetails()}
      </div>
    );
  }
}

export default MovieDetails;
