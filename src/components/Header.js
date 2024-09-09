import React from 'react';

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
          <li><a href="#about">About us</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#discussions">Discussions</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
