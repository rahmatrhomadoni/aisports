import React from 'react';
import { Link } from 'react-router-dom';
import {
  badmintonPath,
  chessPath,
  eSportsPath,
  silatPath,
  soccerPath,
  weightLiftingPath,
} from '../routes';
import '../styles/responsive.css';

function AppFooter() {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top_desc'>
          <h4>
            ADS PROJECTS:
            <br />
            ADVENTURE IN INDONESIAN SPORTS
          </h4>
          <p>
            Website Adventures in Indonesia Sports (ADS) bertujuan untuk
            menyajikan sejarah olahraga dari penjuru nusantara yang komprehensif
            dan dikembangkan melalui website yang menarik untuk dijelajahi.
          </p>
          <p>
            Tim ADS (Aldo, Dhoni, dan Satria), yang merupakan mahasiswa Teknik
            Informatika 2020 dari Universitas Lampung memiliki perannya
            masing-masing dengan mengombinasikan pengetahuan dan keterampilan
            yang dimiliki dalam bekerja sama untuk mengembangkan website
            "Adventures in Indonesian Sports".
          </p>
        </div>
        <div className='footer-top_category'>
          <div className='footer-top_category-sub'>
            <p>Jenis Olahraga</p>
            <ul>
              <li>
                <Link to={soccerPath}>Sepak Bola</Link>
              </li>
              <li>
                <Link to={silatPath}>Silat</Link>
              </li>
              <li>
                <Link to={chessPath}>Catur</Link>
              </li>
              <li>
                <Link to={eSportsPath}>E-Sports</Link>
              </li>
              <li>
                <Link to={badmintonPath}>Bulu Tangkis</Link>
              </li>
              <li>
                <Link to={weightLiftingPath}>Angkat Besi</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-bottom_list'>
          <ul>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className='footer-bottom_copyright'>
          <p>ADS Projects © 2023, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
