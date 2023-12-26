import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className='nav-wrapper  cyan darken-4 '>
        <a href='http://movies.evgeniups.space/' className='brand-logo '>
          React movies
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='https://evgeniups.space/'>Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
