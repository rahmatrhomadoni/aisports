import React from 'react';
import '../../styles/history.css';
import tali from '../../assets/img-sejarah/tali.png';
import katak from '../../assets/img-sejarah/katak.png';
import bgEsport from '../../assets/img-sejarah/bg-esport.png';
import BackgroundTanah from '../../components/BackgroundTanah';
import ArrowUp from '../../components/ArrowUp';

const EsportHistory = () => {
  const dataHistory = [
    {
      date: '',
      desc: 'E-Sports mulai muncul di Indonesia pada awal tahun 2000-an dengan popularitas permainan video seperti Counter-Strike, Dota, dan Warcraft III. Turnamen kecil dan komunitas pemain video game mulai terbentuk di berbagai kota di Indonesia.',
    },
    {
      date: '',
      desc: 'Komunitas E-Sports mulai berkembang pesat di Indonesia selama tahun 2000-an hingga awal 2010-an. Turnamen dan acara E-Sports lokal menjadi semakin populer dan menarik partisipasi dari pemain amatir maupun profesional.',
    },
    {
      date: '',
      desc: 'Pada tahun 2013, Federasi E-Sports Indonesia (IESPA) resmi didirikan.IESPA bertujuan untuk mengatur dan mengembangkan E-Sports di Indonesia serta mewakili Indonesia di tingkat internasional.',
    },
    {
      date: '',
      desc: 'Pada tahun 2018, Kementerian Pemuda dan Olahraga Republik Indonesia secara resmi mengakui E-Sports sebagai cabang olahraga elektronik. Pengakuan ini memberikan legitimasi dan dukungan pemerintah bagi perkembangan E-Sports di Indonesia.',
    },
    {
      date: '',
      desc: 'Perusahaan dan sponsor mulai melirik potensi bisnis di industri E-Sports Indonesia. Banyak turnamen E-Sports besar dan liga profesional didirikan, menarik minat pemain dan penonton. Tim dan pemain E-Sports Indonesia mulai mencatat prestasi di tingkat internasional, baik dalam turnamen regional maupun global.',
    },
    {
      date: '',
      desc: 'Tim dan pemain E-Sports Indonesia mulai mencatat prestasi di tingkat internasional, baik dalam turnamen regional maupun global. Indonesia berhasil meraih medali dan pengakuan dalam ajang kompetisi E-Sports dunia.',
    },
    {
      date: '',
      desc: 'Indonesia menjadi tuan rumah berbagai turnamen E-Sports besar, seperti DOTA 2 Major dan PUBG Mobile Global Championship. Arena E-Sports modern didirikan di berbagai kota besar di Indonesia untuk menampung acara-acara besar dan mendukung kompetisi E-Sports.',
    },
  ];

  return (
    <div className='sport-container catur-container'>
      <img src={bgEsport} alt='bg-esport' className='bg-esport' />
      <div className='sport-section'>
        <div className='sport-content-1' id='sport-data-esport'>
          {dataHistory.map((experience, id, arr) => (
            <div key={id} className='sport-data sport-data-esport'>
              {(id + 1) % 2 !== 0 && (
                <>
                  <div className='gambar-kiri'></div>
                  <div className='lambang-wrapper-esport simbol-wrapper-esport'>
                    <div className='sport-game'>
                      <img src={katak} alt='katak' width='70' />
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
                  <div className='lambang-wrapper-esport'>
                    <div className='sport-game'>
                      <img src={katak} alt='katak' width='70' />
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
                  <div className='sport-game'>
                    <img src={katak} alt='katak' width='70' />
                  </div>
                </div>
              )}

              <div className='data-item-sm data-item-sm-esport'>
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

export default EsportHistory;
