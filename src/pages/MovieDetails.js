import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      movie: {}
    }
  }
  


  componentDidMount() {
    const { match: { params: {id} } } = this.props;
    
    getMovie(id).then((mov) => {
      this.setState({
        movie: {...mov},
        loading: false
      });
    });
  }
  
  async fetchMovieBy(id) {
  const { getMovie } = movieAPI;    
  
  const 
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle} = {};

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

export default MovieDetails;
