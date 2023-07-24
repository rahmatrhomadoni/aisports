import React from 'react';
import '../styles/background.css';
import bangunan1 from '../assets/img-background/bangunan-1.png';
import bangunan2 from '../assets/img-background/bangunan-2.png';
import tanaman1 from '../assets/img-background/tanaman-1.png';
import tanaman2 from '../assets/img-background/tanaman-2.png';
import bendera from '../assets/img-background/Bendera.svg';
import rumput from '../assets/img-background/rumput.png';
import football from '../assets/img-background/football.png';
import taekwondo from '../assets/img-background/taekwondo.png';
import angkatbesi from '../assets/img-background/angkatbesi.png';
import badminton from '../assets/img-background/badminton.png';
import caturKuda from '../assets/img-background/catur-kuda.png';
import caturMenteri from '../assets/img-background/catur-menteri.png';
import BackgroundTanah from '../components/BackgroundTanah';
import BackgroundAwan from '../components/BackgroundAwan';

const Background = () => {
  return (
    <div className='background'>
      <BackgroundAwan />
      <div className='background-bangunan-container'>
        <div className='bg-bangunan-1'>
          <img src={bangunan1} alt='background-bangunan' />
        </div>
        <div className='bg-bangunan-2'>
          <img src={bangunan2} alt='background-bangunan' />
        </div>
      </div>
      <div className='background-tanaman-container'>
        <div className='tanaman-1'>
          <img src={bendera} alt='bendera' className='bendera' />
          <img
            src={tanaman1}
            alt='background-tanaman'
            className='bg-tanaman-1'
          />
        </div>
        <div className='sport-character'>
          <img src={rumput} alt='background-rumput' className='bg-rumput' />
          <img
            src={football}
            alt='football-character'
            className='bg-football'
          />
          <img
            src={taekwondo}
            alt='taekwondo-character'
            className='bg-taekwondo'
          />
          <img
            src={angkatbesi}
            alt='angkatbesi-character'
            className='bg-angkatbesi'
          />
          <img
            src={badminton}
            alt='badminton-character'
            className='bg-pebulutangkis'
          />
          <img
            src={caturKuda}
            alt='caturKuda-character'
            className='bg-caturKuda'
          />
          <img
            src={caturMenteri}
            alt='caturMenteri-character'
            className='bg-caturMenteri'
          />
        </div>
        <img src={tanaman2} alt='background-tanaman' className='bg-tanaman-2' />
      </div>
      <BackgroundTanah />
    </div>
  );
};

export default Background;
