import React, { useState, useEffect } from 'react';
import Typewriter from '../components/TyperWriter';
import AppHeader from '../components/AppHeader';
import badmintonAthlete from '../assets/athlete/badminton-athlete.png';
import background from '../assets/img-background/badminton-background.png';
import batuBadminton from '../assets/img-background/batu-badminton.png';
import BadmintonHistory from './history/BadmintonHistory';

function BadmintonPage() {
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
    }, delay * 16.5);

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
      <div id='bulutangkis-page' className='sport-history'>
        <AppHeader />
        <div className='sport'>
          <div className='sport-background'>
            <img
              src={background}
              alt='bulu tangkis background'
              id='sport-background-id'
            />
          </div>

          <div className='sport-component'>
            <h3>Sejarah Badminton di Indonesia</h3>
            <div className='type-writer-wrapper'>
              {typewriter1Visible && <Typewriter text='Halo!' delay={100} />}
              {typewriter2Visible && (
                <Typewriter text='MARI KITA MULAI MEMPELAJARI' delay={100} />
              )}
              {typewriter3Visible && (
                <Typewriter text='SEJARAH BADMINTON DI INDONESIA' delay={100} />
              )}
              {typewriter4Visible && (
                <Typewriter text='TEKAN START UNTUK MEMULAI.' delay={100} />
              )}
            </div>

            <div className='sport-character-button'>
              <img
                src={badmintonAthlete}
                alt='badminton athlete'
                className='sport-character-silat'
              />
              <a onClick={scrollToHeight} href='#'>
                Start
              </a>
            </div>
          </div>

          <div className='batu-sport'>
            <img
              src={batuBadminton}
              alt='batu'
              className='batu-sport'
              id='batu'
            />
          </div>
        </div>
      </div>
      <BadmintonHistory />
    </>
  );
}

export default BadmintonPage;
