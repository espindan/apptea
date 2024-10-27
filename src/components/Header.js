import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'; // Materialize CSS
import M from 'materialize-css'; // Import Materialize JS
import logo from './images/logo.png'; // Import image
import Search from './Search'

const Header = () => {
  useEffect(() => {
    // Initialize sidenav once the component is mounted
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  }, []); // Empty dependency array ensures it runs once on mount

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSearchClick = () => {
    setModalOpen(true); // Open modal when search input is clicked
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search for:", searchTerm); // Handle the search action here
    setModalOpen(false); // Close modal on submit
  };

  return (
    <>
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <div className='left'>
            <img src={logo} id="logo-container" className="brand-logo" alt="Unsplashed background img 1" />
          </div>

          {/* Desktop Menu */}
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <form onSubmit={handleSearchSubmit}>
                <div className="input-field search-container">
                  <i className="material-icons search-icon">search</i>
                  <input
                    id="search"
                    type="search"
                    placeholder="Busqueda Paciente"
                    //value={searchTerm}
                    onClick={handleSearchClick} // Open modal on click
                    readOnly
                  />
                </div>
              </form>
            </li>
            <li><a href="#info-blog">Blog de Información</a></li>
            <li><a href="#crear-perfil">Crear Perfil</a></li>
            <li><Link to="/">Salir</Link></li>
          </ul>

          {/* Mobile Sidenav */}
          <ul className="sidenav" id="mobile-nav">
            <li><Link to="/Search">Buscar</Link></li>
            <li><a href="#info-blog">Blog de Información</a></li>
            <li><a href="#crear-perfil">Crear Perfil</a></li>
            <li><Link to="/">Salir</Link></li>
          </ul>

          {/* Sidenav Trigger */}
          <a href="#" data-target="mobile-nav" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>

      {/* Modal Structure */}
      {isModalOpen && (
        <div className="modal open" style={{ display: 'block', zIndex: '1000', width:'80%', maxHeight:'90%'}}>
          <div className="modal-content">
           <Search/>
          </div>
          <div className="modal-footer">
            <button onClick={() => setModalOpen(false)} className="modal-close btn">
              Close
            </button>
          </div>
        </div>
      )}
    </>

  );
};

export default Header;


