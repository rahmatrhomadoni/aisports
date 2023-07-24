import React from 'react';
import AppHeader from '../components/AppHeader';
import aldo from '../assets/developer/aldo-wijaya.png';
import doni from '../assets/developer/rahmat-rhomadoni.png';
import satria from '../assets/developer/satria-berliano-manzi.png';
import tanah from '../assets/img-background/tanah.png';

function AboutUsPage() {
  return (
    <div className='aboutus-page'>
      <AppHeader />
      <div className='aboutus'>
        <div className='aboutus-container'>
          <h3>Tim Pengembang Website</h3>
          <div className='aboutus-developer-container'>
            <div className='aboutus-developer'>
              <img src={aldo} alt='aldo wijaya card' />
              <div className='aboutus-developer-identity'>
                <h4>Aldo</h4>
                <p>Front End Developer</p>
                <a
                  href='https://www.linkedin.com/in/aldowijaya/'
                  target='_blank'
                  rel='noreferrer'
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className='aboutus-developer'>
              <img src={doni} alt='rahmat rhomadoni card' />
              <div className='aboutus-developer-identity'>
                <h4>Dhoni</h4>
                <p>UI/UX Designer</p>
                <a
                  href='https://www.linkedin.com/in/rahmatrhomadoni/'
                  target='_blank'
                  rel='noreferrer'
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className='aboutus-developer'>
              <img src={satria} alt='satria berliano manzi card' />
              <div className='aboutus-developer-identity'>
                <h4>Satria</h4>
                <p>Front End Developer</p>
                <a
                  href='https://www.linkedin.com/in/satriaberlianomanzi/'
                  target='_blank'
                  rel='noreferrer'
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='aboutus-tanah-container'>
        <img src={tanah} alt='tanah' />
      </div>
    </div>
  );
}

export default AboutUsPage;
