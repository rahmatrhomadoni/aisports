import React, { useState, useEffect } from 'react';
import chessAthlete from '../assets/athlete/chess-athlete.png';
import Typewriter from '../components/TyperWriter';
import AppHeader from '../components/AppHeader';
import bangunan from '../assets/img-background/bangunan-4.png';
import batuCatur from '../assets/img-background/batu-catur.png';
import '../styles/history-top.css';
import CaturHistory from './history/CaturHistory';

function ChessPage() {
  const [typewriter1Visible, setTypewriter1Visible] = useState(false);
  const [typewriter2Visible, setTypewriter2Visible] = useState(false);
  const [typewriter3Visible, setTypewriter3Visible] = useState(false);
  const [typewriter4Visible, setTypewriter4Visible] = useState(false);

  function scrollToHeight() {
    const bodyHeight = document.body.offsetHeight;
    const scrollValue = Math.min(bodyHeight, window.innerHeight) + 50;
    window.scrollTo({
      top: scrollValue,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    const delay = 500; // Waktu penundaan antara munculnya setiap Typewriter (ms)

    const typewriter1Timer = setTimeout(() => {
      setTypewriter1Visible(true);
    }, delay);

    const typewriter2Timer = setTimeout(() => {
      setTypewriter2Visible(true);
    }, delay * 2.5);

    const typewriter3Timer = setTimeout(() => {
      setTypewriter3Visible(true);
    }, delay * 10);

    const typewriter4Timer = setTimeout(() => {
      setTypewriter4Visible(true);
    }, delay * 15);

    return () => {
      clearTimeout(typewriter1Timer);
      clearTimeout(typewriter2Timer);
      clearTimeout(typewriter3Timer);
      clearTimeout(typewriter4Timer);
    };
  }, []);

  return (
    <>
      <div id='chess-page' className='sport-history'>
        <AppHeader />
        <div className='sport'>
          <div className='sport-background'>
            <img
              src={bangunan}
              alt='bangunan terang'
              id='sport-background-id'
            />
          </div>
          <div className='sport-component'>
            <h3>Sejarah Catur di Indonesia</h3>
            <div className='type-writer-wrapper'>
              {typewriter1Visible && <Typewriter text='Halo!' delay={100} />}
              {typewriter2Visible && (
                <Typewriter
                  text='MARI KITA MULAI MEMPELAJARI SEJARAH'
                  delay={100}
                />
              )}
              {typewriter3Visible && (
                <Typewriter text='DARI CATUR DI INDONESIA' delay={100} />
              )}
              {typewriter4Visible && (
                <Typewriter text='TEKAN START UNTUK MEMULAI.' delay={100} />
              )}
            </div>

            <div className='sport-character-button'>
              <img
                src={chessAthlete}
                alt='bidak catur'
                className='sport-character-catur'
              />
              <a onClick={scrollToHeight} href='#'>
                START
              </a>
            </div>
          </div>

          <div className='batu-sport'>
            <img src={batuCatur} alt='batu' className='batu-sport' />
          </div>
        </div>
      </div>
      <CaturHistory />
    </>
  );
}

export default ChessPage;
