import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { aboutUsPath, referencePath, rootPath, sportsPath } from '../routes';
import { FaTimes } from 'react-icons/fa';

const Navigation = React.forwardRef(({ showNavbar, hideNavbar }, ref) => {
  const location = useLocation();

  return (
    <nav className='navigation' ref={ref}>
      <ul>
        <li>
          <Link
            to={rootPath}
            onClick={hideNavbar}
            className={location.pathname === rootPath ? 'active' : ''}
          >
            Beranda
          </Link>
        </li>
        <li>
          <Link
            to={sportsPath}
            onClick={hideNavbar}
            className={location.pathname === sportsPath ? 'active' : ''}
          >
            Olahraga
          </Link>
        </li>
        <li>
          <Link
            to={referencePath}
            onClick={hideNavbar}
            className={location.pathname === referencePath ? 'active' : ''}
          >
            Referensi
          </Link>
        </li>
        <li>
          <Link
            to={aboutUsPath}
            onClick={hideNavbar}
            className={location.pathname === aboutUsPath ? 'active' : ''}
          >
            Tentang Kami
          </Link>
        </li>
      </ul>
      <button className='nav-btn nav-close-btn' onClick={showNavbar}>
        <FaTimes />
      </button>
    </nav>
  );
});

export default Navigation;
