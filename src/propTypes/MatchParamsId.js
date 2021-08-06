import PropTypes from 'prop-types';

const matchParamsId = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default matchParamsId;
