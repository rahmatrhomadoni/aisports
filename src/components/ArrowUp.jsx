import React from 'react';
import BackToTop from '../assets/img-sejarah/back-to-top.png';
import '../styles/arrow-up.css';

const ArrowUp = () => {
  return (
    <div className='back-to-top'>
      <a href='#top'>
        <img src={BackToTop} alt='arrow-up' />
      </a>
    </div>
  );
};

export default ArrowUp;
