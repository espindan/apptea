import React from 'react';

const Sidebar = () => {
  return (
    <ul className="collection with-header">
      <li className="collection-header"><h5>Categories</h5></li>
      <li className="collection-item"><a href="#all">All discussions</a></li>
      <li className="collection-item"><a href="#">Nootrópicos</a></li>
      <li className="collection-item"><a href="#">Respiración</a></li>
      <li className="collection-item"><a href="#">Terapias</a></li>
      <li className="collection-item"><a href="#">Tratamientos</a></li>
    </ul>
  );
};

export default Sidebar;
