import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitleValue, onChangeInput } = this.props;
    return (
      <div>
        <label htmlFor="movie_subtitle">
          Subtítulo
          <input
            placeholder="Insira o subtítulo"
            name="subtitle"
            id="movie_subtitle"
            type="text"
            value={ subtitleValue }
            onChange={ onChangeInput }
          />
        </label>
      </div>
    );
  }
}

Subtitle.propTypes = {
  subtitleValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Subtitle;
