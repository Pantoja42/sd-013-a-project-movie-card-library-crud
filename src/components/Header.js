import React from 'react';
import { Link } from 'react-router-dom';

class Headery extends React.Component {
  render() {
    return (
      <header>
        <div>Movie Card Library CRUD</div>
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </header>
    );
  }
}

export default Headery;
