import React from 'react';
import '../../styles/history.css';
import tali from '../../assets/img-sejarah/tali.png';
import catur from '../../assets/img-sejarah/catur.png';
import bgCatur from '../../assets/img-sejarah/bg-catur.png';
import BackgroundTanah from '../../components/BackgroundTanah';
import ArrowUp from '../../components/ArrowUp';
import BackgroundAwanHistory from '../../components/BackgroundAwanHistory';

const CaturHistory = () => {
  const dataHistory = [
    {
      date: 'Pengenalan Catur ke Indonesia:',
      desc: 'Catur diperkenalkan ke Indonesia melalui kontak dengan bangsa India pada zaman perdagangan maritim kuno. Permainan catur membawa konsep intelektual dan strategi yang menarik minat kalangan intelektual di Indonesia.',
    },
    {
      date: 'Perkembangan di Kalangan Intelektual',
      desc: 'Catur menjadi populer di kalangan intelektual Indonesia pada abad ke-19 dan awal abad ke-20. Beberapa komunitas catur mulai terbentuk di berbagai daerah di Indonesia.',
    },
    {
      date: 'Keikutsertaan Pertama dalam Olimpiade Catur',
      desc: 'Pada tahun 1950, Indonesia mengikuti Olimpiade Catur untuk pertama kalinya di Dubrovnik, Yugoslavia (sekarang Kroasia). Indonesia berpartisipasi sebagai negara non-anggota FIDE (Fédération Internationale des Échecs) pada saat itu.',
    },
    {
      date: 'Pembentukan Persatuan Catur Seluruh Indonesia (PECASI) (1953):',
      desc: 'Pada tanggal 20 Desember 1953, Persatuan Catur Seluruh Indonesia (PECASI) resmi didirikan. PECASI bertujuan untuk mengembangkan dan mengatur olahraga catur di Indonesia.',
    },
    {
      date: 'Kemenangan Emas Pertama dalam Olimpiade Catur (1962)',
      desc: 'Pada Olimpiade Catur tahun 1962 di Varna, Bulgaria, tim catur Indonesia meraih medali emas untuk pertama kalinya. Prestasi ini menjadi momen bersejarah bagi perkembangan catur di Indonesia.',
    },
    {
      date: 'Perkembangan Prestasi Catur Indonesia',
      desc: 'Indonesia terus menunjukkan perkembangan prestasi catur di tingkat internasional, baik dalam Olimpiade Catur maupun kompetisi-kompetisi lainnya. ',
    },
    {
      date: '',
      desc: 'Beberapa caturawan Indonesia mencatat prestasi gemilang di tingkat nasional dan internasional. Keikutsertaan mereka membawa nama Indonesia sebagai salah satu negara dengan pemain catur yang mampu bersaing di tingkat dunia. Seperti  Herman Suradiradja. Herman Ardiansyah, Irene Kharisma Sukandar, Susanto Megaranto.',
    },
  ];

  return (
    <div className='sport-container catur-container'>
      <img src={bgCatur} alt='bg-catur' className='bg-catur' />
      <BackgroundAwanHistory />
      <div className='sport-section'>
        <div className='sport-content-1' id='sport-data-catur'>
          {dataHistory.map((experience, id, arr) => (
            <div key={id} className='sport-data sport-data-catur'>
              {(id + 1) % 2 !== 0 && (
                <>
                  <div className='gambar-kiri'></div>
                  <div className='simbol-wrapper-catur'>
                    <div className='sport-catur'>
                      <img src={catur} alt='catur' width='50' />
                    </div>
                    {id + 1 !== arr.length && (
                      <div className='sport-line-catur'>
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
                  <div className='lambang-wrapper-catur'>
                    <div className='sport-catur'>
                      <img src={catur} alt='catur' width='50' />
                    </div>
                    <div className='sport-line-catur'>
                      <img src={tali} alt='tali' width='20' />
                    </div>
                  </div>
                  <div className='gambar-kiri'></div>
                </>
              )}

              {id + 1 === arr.length && (id + 1) % 2 === 0 && (
                <div className=''>
                  <div className='sport-catur'>
                    <img src={catur} alt='catur' width='50' />
                  </div>
                </div>
              )}

              <div className='data-item-sm'>
                <div className='data-item-content'>
                  <p className='sport-subtitle'>{experience.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ArrowUp />
      <BackgroundTanah />
    </div>
  );
};

export default CaturHistory;
