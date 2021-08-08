import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { genreValue, onChangeInput } = this.props;
    return (
      <div>
        <label htmlFor="movie_genre">
          Gênero
          <select
            id="movie_genre"
            name="genre"
            value={ genreValue }
            onChange={ onChangeInput }
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </label>
      </div>
    );
  }
}

Genre.propTypes = {
  genreValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Genre;
