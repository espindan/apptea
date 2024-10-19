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
                Apptea
            </a>
        </div>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/Search"> Buscar </Link> </li>
          <li><Link to="/AutismChildForm"> Crear Perfil</Link> </li>
          <li><Link to="/Blog"> Consultas </Link> </li>
          <li><Link to="/"> Salir </Link> </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
