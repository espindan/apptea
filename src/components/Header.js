import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'; // Materialize CSS
import M from 'materialize-css'; // Import Materialize JS

const Header = () => {
  useEffect(() => {
    // Initialize sidenav once the component is mounted
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <nav className="white" role="navigation">
      <div className="nav-wrapper container">
        <div className='left'>
          <a id="logo-container" href="#" className="brand-logo">Logo</a>
        </div>

        {/* Desktop Menu */}
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/Search">Buscar</Link></li>
          <li><Link to="/AutismChildForm">Crear Perfil</Link></li>
          <li><Link to="/Blog">Consultas</Link></li>
          <li><Link to="/">Salir</Link></li>
        </ul>

        {/* Mobile Sidenav */}
        <ul className="sidenav" id="mobile-nav">
          <li><Link to="/Search">Buscar</Link></li>
          <li><Link to="/AutismChildForm">Crear Perfil</Link></li>
          <li><Link to="/Blog">Consultas</Link></li>
          <li><Link to="/">Salir</Link></li>
        </ul>
        
        {/* Sidenav Trigger */}
        <a href="#" data-target="mobile-nav" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    </nav>
  );
};

export default Header;