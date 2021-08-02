import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(){
    super()

    this.state = {
      movie:''
    }
  }
  componentDidMount(){
    const { match: { params: { id } } } = this.props
    movieAPI.getMovie(id).then(resp =>{
      this.setState({
       movie:resp,
      })     
    })
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle,id } = movie; 

      if(movie === '') return <Loading />
    return (
      <div data-testid="movie-details">
        <h4>{ `Title: ${title}` }</h4>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to='/'>VOLTAR</Link>

      </div>
    );
  }
}

export default MovieDetails;
