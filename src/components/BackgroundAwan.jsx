import React from 'react';
import awan from '../assets/img-background/awan.png';
import '../styles/background-awan.css';

const BackgroundAwan = () => {
  return (
    <div className='background-awan-container'>
      <div className='bg-awan1'>
        <img src={awan} alt='background-awan' className='img-awan1' />
      </div>
      <div className='bg-awan2 '>
        <img src={awan} alt='background-awan' className='img-awan2' />
      </div>
      <div className='bg-awan3'>
        <img src={awan} alt='background-awan' className='img-awan3' />
      </div>
    </div>
  );
};

export default BackgroundAwan;
