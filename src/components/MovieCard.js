import React from 'react';
import {Link} from 'react-router-dom';


class MovieCard extends React.Component {
  constructor(props){
    super(props)
  };

  render() {
    

    return (
      <div data-testid="movie-card">
        <h1>{this.props.movie.title}</h1>
        <p>{this.props.movie.storyline}</p>
        <Link to={`/movies/${this.props.movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
