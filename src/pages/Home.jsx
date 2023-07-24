import React from 'react';
import Background from './Background';
import '../styles/background.css';
import AppHeader from '../components/AppHeader';
import { sportsPath } from '../routes';

function Home() {
  return (
    <div className='home'>
      <AppHeader />
      <Background />
      <div className='home-container'>
        <h3 className='home-slogan'>
          MARI KITA JELAJAHI
          <br /> SEJARAH OLAHRAGA
          <br />
          DI<span> INDONESIA!</span>
        </h3>
        <p className='home-text'>
          Mari kita jelajahi dan gali sejarah dari <br />
          olahraga di seluruh penjuru Nusantara!
        </p>
        <a href={sportsPath} className='button-mulai-jelajah'>
          <span>Mulai Jelajah</span>
        </a>
      </div>
    </div>
  );
}

export default Home;
