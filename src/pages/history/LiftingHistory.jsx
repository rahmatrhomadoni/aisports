import React from 'react';
import '../../styles/history.css';
import tali from '../../assets/img-sejarah/tali.png';
import beban from '../../assets/img-sejarah/beban.png';
import bgLifting from '../../assets/img-sejarah/bg-lifting.png';
import BackgroundTanah from '../../components/BackgroundTanah';
import ArrowUp from '../../components/ArrowUp';

const LiftingHistory = () => {
  const dataHistory = [
    {
      date: '',
      desc: 'Angkat besi diperkenalkan ke Indonesia pada era kolonial Belanda. Olahraga ini awalnya dikenal dengan sebutan "berat" atau "angkat berat."',
    },
    {
      date: '',
      desc: 'Angkat besi mulai berkembang sebagai olahraga di Indonesia pada tahun 1940-an dan 1950-an. Para atlet Indonesia mulai berpartisipasi dalam kompetisi regional dan nasional.',
    },
    {
      date: '',
      desc: 'Pada tanggal 5 Mei 1962, Persatuan Angkat Besi Seluruh Indonesia (PABSI) resmi didirikan. PABSI bertujuan untuk mengatur dan mengembangkan olahraga angkat besi di Indonesia serta mewakili Indonesia di tingkat internasional.',
    },
    {
      date: '',
      desc: 'Pada Asian Games tahun 1962 di Jakarta, Indonesia meraih medali emas pertama dalam cabang olahraga angkat besi. Prestasi ini menjadi momen bersejarah bagi perkembangan angkat besi Indonesia.',
    },
    {
      date: '',
      desc: 'Pada tahun 1970-an dan 1980-an, atlet angkat besi Indonesia terus menunjukkan prestasi gemilang dalam kompetisi regional dan internasional. Prestasi atlet Indonesia di ajang Kejuaraan Asia dan SEA Games semakin meningkat.',
    },
    {
      date: '',
      desc: 'Pada Olimpiade Athena 2004, atlet angkat besi Indonesia, Eko Yuli Irawan, meraih medali emas pertama untuk Indonesia di cabang olahraga angkat besi.',
    },
    {
      date: '',
      desc: 'Prestasi atlet angkat besi Indonesia terus berkembang hingga saat ini. Indonesia terus mengirimkan atlet yang berkompetisi di Kejuaraan Dunia Angkat Besi, Olimpiade, Asian Games, dan SEA Games.',
    },
  ];

  return (
    <div className='sport-container'>
      <img src={bgLifting} alt='bg-silat' className='bg-silat' />
      <div className='sport-section'>
        <div className='sport-content-1' id='sport-content-lifting'>
          {dataHistory.map((experience, id, arr) => (
            <div key={id} className='sport-data sport-data-lifting'>
              {(id + 1) % 2 !== 0 && (
                <>
                  <div className='gambar-kiri'></div>
                  <div className='simbol-wrapper'>
                    <div className='sport-lifting'>
                      <img src={beban} alt='beban' width='55' />
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
                  <p className='sport-title'>{experience.date}</p>
                  <p className='sport-subtitle'>{experience.desc}</p>
                </div>
              </div>
              {(id + 1) % 2 === 0 && id + 1 !== arr.length && (
                <>
                  <div className='lambang-wrapper'>
                    <div className='sport-lifting'>
                      <img src={beban} alt='beban' width='55' />
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
                  <div className='sport-lifting'>
                    <img src={beban} alt='beban' width='40' />
                  </div>
                </div>
              )}

              <div className='data-item-sm'>
                <div className='data-item-content'>
                  <p className='sport-title'>{experience.date}</p>
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

export default LiftingHistory;
