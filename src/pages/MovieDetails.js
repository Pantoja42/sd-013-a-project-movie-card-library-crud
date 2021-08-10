import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor () {
    super();
    
    this.state = {
      movie: {},
      load: false,
    }
    this.LoadMovie = this.LoadMovie.bind(this);
  }

  async LoadMovie() {
    const { match: { params: { id } } } = this.props
    const request = await movieAPI.getMovie(id);  
    this.setState({ 
      movie: request,
      load: true,
    });
  }

  componentDidMount (){
    this.LoadMovie()
  }
  
  render() {
    const { movie, load } = this.state
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        {!load ? <Loading /> :
          <div>  
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{ `Title: ${title}` }</p>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to ={`/movies/${id}/edit`}>EDITAR </Link>
            <Link to="/">VOLTAR</Link>
          </div>}   
      </div>
    );
  }
}

export default MovieDetails;
