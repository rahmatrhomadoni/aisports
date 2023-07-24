import React from 'react';
import '../../styles/history.css';
import tali from '../../assets/img-sejarah/tali.png';
import cock from '../../assets/img-sejarah/cock.png';
import bgBadminton from '../../assets/img-sejarah/bg-badminton.png';
import FooterHistory from '../../components/BackgroundTanah';
import ArrowUp from '../../components/ArrowUp';
import BackgroundAwan from '../../components/BackgroundAwan';

const BadmintonHistory = () => {
  const dataHistory = [
    {
      date: '',
      desc: 'Badminton diperkenalkan ke Indonesia oleh pedagang Inggris pada abad ke-18 dan ke-19.Olahraga ini awalnya dikenal dengan sebutan "Poona" atau "Poonah" karena berasal dari kota Poona (kini Pune), India.',
    },
    {
      date: '',
      desc: 'Olahraga badminton mulai dimainkan oleh kalangan elit kolonial Belanda di Indonesia. Mereka membentuk klub-klub kecil untuk bermain badminton.',
    },
    {
      date: '',
      desc: 'Badminton mulai menarik minat kalangan pribumi Indonesia. Para pemain pribumi aktif bermain dan berlatih di klub-klub kolonial.',
    },
    {
      date: '',
      desc: 'Pada tahun 1934, digelar turnamen badminton pertama di Indonesia yang disebut "Championship of Java" di Surabaya, Jawa Timur. Turnamen ini menandai awal formalitas badminton sebagai olahraga yang diorganisir di Indonesia.',
    },
    {
      date: '',
      desc: 'Pada tanggal 5 Mei 1951, Persatuan Bulu Tangkis Seluruh Indonesia (PBSI) resmi didirikan. PBSI bertujuan untuk mengembangkan dan mengatur olahraga bulu tangkis di Indonesia.',
    },
    {
      date: '',
      desc: 'Tim bulu tangkis Indonesia meraih gelar juara pada Kejuaraan Dunia Thomas Cup pertama kali pada tahun 1958 di Jakarta. Prestasi ini menjadi momen penting dalam sejarah bulu tangkis Indonesia.',
    },
    {
      date: '',
      desc: 'Pada tahun 1962, Indonesia menjadi tuan rumah Pesta Olahraga Asia (Asian Games) di Jakarta. Tim bulu tangkis Indonesia meraih kesuksesan dengan meraih sejumlah medali emas dan mengukuhkan Indonesia sebagai kekuatan bulu tangkis di tingkat Asia.',
    },
    {
      date: '',
      desc: 'Pada tahun 1980-an, beberapa pemain bulu tangkis Indonesia mencatat prestasi gemilang di Kejuaraan Dunia All England. Pemain seperti Rudy Hartono dan Liem Swie King menjadi juara di ajang bergengsi ini.',
    },
    {
      date: '',
      desc: 'Pada tahun 1990-an, Indonesia meraih kejayaan dengan mengukuhkan diri sebagai salah satu kekuatan utama dalam bulu tangkis dunia. Prestasi cemerlang di Kejuaraan Dunia, Olimpiade, Thomas Cup, dan Uber Cup memperkokoh posisi Indonesia sebagai kekuatan badminton terkemuka.',
    },
  ];

  return (
    <div className='sport-container catur-container'>
      <img src={bgBadminton} alt='bg-silat' className='bg-catur' />
      <BackgroundAwan />
      <div className='sport-section'>
        <div className='sport-content-1' id='sport'>
          {dataHistory.map((experience, id, arr) => (
            <div key={id} className='sport-data sport-data-badminton'>
              {(id + 1) % 2 !== 0 && (
                <>
                  <div className='gambar-kiri'></div>
                  <div className='lambang-wrapper-badminton'>
                    <div className='sport-badminton'>
                      <img src={cock} alt='cock' width='70' />
                    </div>
                    {id + 1 !== arr.length && (
                      <div className='sport-line'>
                        <img src={tali} alt='tali' width='20' />
                      </div>
                    )}
                  </div>
                </>
              )}

              <div className='data-item'>
                <div className='data-item-content'>
                  <p className='sport-subtitle'>{experience.desc}</p>
                </div>
              </div>

              {(id + 1) % 2 === 0 && id + 1 !== arr.length && (
                <>
                  <div className='lambang-wrapper-badminton'>
                    <div className='sport-badminton'>
                      <img src={cock} alt='cock' width='70' />
                    </div>
                    <div className='sport-line'>
                      <img src={tali} alt='tali' width='20' />
                    </div>
                  </div>
                  <div className='gambar-kiri'></div>
                </>
              )}

              {id + 1 === arr.length && (id + 1) % 2 === 0 && (
                <div className=''>
                  <div className='sport-badminton'>
                    <img src={cock} alt='cock' width='70' />
                  </div>
                </div>
              )}

              <div className='data-item-sm data-item-sm-badminton'>
                <div className='data-item-content'>
                  <p className='sport-subtitle'>{experience.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ArrowUp />
      <FooterHistory />
    </div>
  );
};

export default BadmintonHistory;
