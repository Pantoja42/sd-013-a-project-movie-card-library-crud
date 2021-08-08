import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { ratingValue, onChangeInput } = this.props;
    return (
      <div>
        <label htmlFor="movie_rating">
          Avaliação
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            name="rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ ratingValue }
            onChange={ onChangeInput }
          />
        </label>
      </div>
    );
  }
}

Rating.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Rating;
