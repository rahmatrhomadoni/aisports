import React from 'react';
import tanah from '../assets/img-background/tanah.png';
import '../styles/background-tanah.css';

const BackgroundTanah = () => {
  return (
    <div className='tanah-container'>
      <img src={tanah} alt='background-tanah' className='bg-tanah bg-tanah1' />
      <img src={tanah} alt='background-tanah' className='bg-tanah bg-tanah2' />
    </div>
  );
};

export default BackgroundTanah;
