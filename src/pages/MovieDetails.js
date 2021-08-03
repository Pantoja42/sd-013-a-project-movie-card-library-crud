import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      load: true,
      movie: {},
      shouldRedirect: false,
    };
  }

  onClick = () => {
    const { match: { params: { id } } } = this.props;
    // console.log(id);
    movieAPI.deleteMovie(id).then(() => {
      this.setState({
        shouldRedirect: true,
      })
    })
    

  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => {
      this.setState({
        movie,
        load: false,
      });
    });
  }

  render() {
    // Change the condition to check the state
    const { movie: { title, storyline, imagePath, genre, rating, subtitle, id }, load, shouldRedirect } = this.state;
    if (load) return <Loading />;
    
    if (shouldRedirect) {
      return <Redirect to= "/" />
    }

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
        <Link onClick={this.onClick} to="/">DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
