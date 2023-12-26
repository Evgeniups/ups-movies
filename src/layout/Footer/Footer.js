import React from 'react';

function Footer(props) {
  return (
    <footer className='page-footer teal lighten-2 '>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} All rights reserved
          <a className='grey-text text-lighten-4 right' href='https://evgeniups.space/'>
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
