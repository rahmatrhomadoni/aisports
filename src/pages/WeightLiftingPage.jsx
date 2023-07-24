import React, { useState, useEffect } from 'react';
import Typewriter from '../components/TyperWriter';
import AppHeader from '../components/AppHeader';
import weightliftingAthlete from '../assets/athlete/weightlifting-athlete.png';
import background from '../assets/img-background/lifting-background.png';
import batuLifting from '../assets/img-background/batu-lifting.png';
import LiftingHistory from './history/LiftingHistory';

function WeightLiftingPage() {
  const [typewriter1Visible, setTypewriter1Visible] = useState(false);
  const [typewriter2Visible, setTypewriter2Visible] = useState(false);
  const [typewriter3Visible, setTypewriter3Visible] = useState(false);
  const [typewriter4Visible, setTypewriter4Visible] = useState(false);

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
      <div id='angkatbesi-page' className='sport-history'>
        <AppHeader />
        <div className='sport'>
          <div className='sport-background'>
            <img
              src={background}
              alt='angkat besi background'
              id='sport-background-id'
            />
          </div>

          <div className='sport-component'>
            <h3>Sejarah Angkat Besi di Indonesia</h3>
            <div className='type-writer-wrapper'>
              {typewriter1Visible && <Typewriter text='Halo!' delay={100} />}
              {typewriter2Visible && (
                <Typewriter
                  text='MARI KITA MULAI MEMPELAJARI SEJARAH'
                  delay={100}
                />
              )}
              {typewriter3Visible && (
                <Typewriter text='DARI ANGKAT BESI DI INDONESIA' delay={100} />
              )}
              {typewriter4Visible && (
                <Typewriter text='TEKAN START UNTUK MEMULAI.' delay={100} />
              )}
            </div>
            <div className='sport-character-button'>
              <img
                src={weightliftingAthlete}
                alt='weight lifting athlete'
                className='sport-character-lifter'
              />
              <a onClick={scrollToHeight} href='#'>
                START
              </a>
            </div>
          </div>
          <div className='batu-sport'>
            <img src={batuLifting} alt='batu' className='batu-sport' />
          </div>
        </div>
      </div>
      <LiftingHistory />
    </>
  );
}

export default WeightLiftingPage;
