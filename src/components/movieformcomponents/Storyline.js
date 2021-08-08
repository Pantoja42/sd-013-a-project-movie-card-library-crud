import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storylineValue, onChangeInput } = this.props;
    return (
      <div>
        <label htmlFor="movie_storyline">
          Sinopse
          <textarea
            id="movie_storyline"
            name="storyline"
            value={ storylineValue }
            onChange={ onChangeInput }
          />
        </label>
      </div>
    );
  }
}

Storyline.propTypes = {
  storylineValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Storyline;
