import React, { useEffect, useState } from 'react';
import soccerAthlete from '../assets/athlete/soccer-athlete.png';
import Typewriter from '../components/TyperWriter';
import AppHeader from '../components/AppHeader';
import FootballHistory from './history/FootballHistory';
import tanah from '../assets/img-background/tanah.png';

function SoccerPage() {
  const [typewriter1Visible, setTypewriter1Visible] = useState(false);
  const [typewriter2Visible, setTypewriter2Visible] = useState(false);
  const [typewriter3Visible, setTypewriter3Visible] = useState(false);
  const [typewriter4Visible, setTypewriter4Visible] = useState(false);

  useEffect(() => {
    const delay = 500;

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

  function scrollToHeight() {
    const bodyHeight = document.body.offsetHeight;
    const scrollValue = Math.min(bodyHeight, window.innerHeight) + 50;
    window.scrollTo({
      top: scrollValue,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <div id='soccer-page' className='sport-history'>
        <AppHeader />
        <div className='sport'>
          <div className='sport-component'>
            <h3>Sejarah Sepak Bola di Indonesia</h3>
            <div className='type-writer-wrapper'>
              {typewriter1Visible && <Typewriter text='Halo!' delay={100} />}
              {typewriter2Visible && (
                <Typewriter
                  text='MARI KITA MULAI MEMPELAJARI SEJARAH'
                  delay={100}
                />
              )}
              {typewriter3Visible && (
                <Typewriter text='SEPAK BOLA DI INDONESIA' delay={100} />
              )}
              {typewriter4Visible && (
                <Typewriter text='TEKAN START UNTUK MEMULAI.' delay={100} />
              )}
            </div>
            <div className='sport-character-button'>
              <img
                src={soccerAthlete}
                alt='athlete soccer'
                className='sport-character-soccer'
              />
              <a onClick={scrollToHeight} href='#'>
                START
              </a>
            </div>
          </div>

          <div className='batu-sport'>
            <img
              src={tanah}
              alt='background tanah'
              className='batu-sport-tanah'
            />
          </div>
        </div>
      </div>
      <FootballHistory />
    </>
  );
}

export default SoccerPage;
