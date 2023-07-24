import React from 'react';
import logosepakbola from '../assets/logo-sports/sepak-bola.png';
import logosilat from '../assets/logo-sports/silat.png';
import logocatur from '../assets/logo-sports/catur.png';
import logoesports from '../assets/logo-sports/e-sports.png';
import logobulutangkis from '../assets/logo-sports/bulu-tangkis.png';
import logoangkatbesi from '../assets/logo-sports/angkat-besi.png';
import { Link } from 'react-router-dom';
import {
  badmintonPath,
  chessPath,
  eSportsPath,
  silatPath,
  soccerPath,
  weightLiftingPath,
} from '../routes';
import rumput from '../assets/img-background/rumput.png';
import AppHeader from '../components/AppHeader';
import BackgroundTanah from '../components/BackgroundTanah';
import '../styles/sports.css';

function Sports() {
  return (
    <div className='sports-menu'>
      <AppHeader />
      <div className='sports'>
        <div className='sports-container'>
          <h3>Pilih Jenis Olahraga</h3>
          <div className='sports-type-container'>
            <Link className='sports-card' to={soccerPath}>
              <img src={logosepakbola} alt='gambar sepak bola' />
              <p>Sepak Bola</p>
            </Link>
            <Link className='sports-card' to={silatPath}>
              <img src={logosilat} alt='gambar silat' />
              <p>Silat</p>
            </Link>
            <Link className='sports-card' to={chessPath}>
              <img src={logocatur} alt='gambar catur' />
              <p>Catur</p>
            </Link>
            <Link className='sports-card' to={eSportsPath}>
              <img src={logoesports} alt='gambar e-sports' />
              <p>E-Sports</p>
            </Link>
            <Link className='sports-card' to={badmintonPath}>
              <img src={logobulutangkis} alt='gambar bulu tangkis' />
              <p>Badminton</p>
            </Link>
            <Link className='sports-card' to={weightLiftingPath}>
              <img src={logoangkatbesi} alt='gambar angkat besi' />
              <p>Angkat Besi</p>
            </Link>
          </div>
        </div>
      </div>
      <img src={rumput} alt='rumput' id='sports-rumput' />
      <div className='sports-tanah'>
        <BackgroundTanah />
      </div>
    </div>
  );
}

export default Sports;
