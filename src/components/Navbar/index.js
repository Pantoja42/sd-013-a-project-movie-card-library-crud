import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div>
          <Link to="/">HOME</Link>
        </div>
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
