import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper pink lighten-3">
        <div className='left'>
            <a href="logo" className="brand-logo">
                <i className="material-icons">lightbulb_outline</i> 
                Bright Minds
            </a>
        </div>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#about">Buscar</a></li>
          <li><Link to="/AutismChildForm"> Crear Perfil</Link> </li>
          <li><a href="#discussions">Discussions</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
