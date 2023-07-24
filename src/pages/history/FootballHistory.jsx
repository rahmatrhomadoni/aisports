import React from 'react';
import '../../styles/history.css';
import bola from '../../assets/img-sejarah/bola.png';
import tali from '../../assets/img-sejarah/tali.png';
import character1 from '../../assets/img-sejarah/footbal-characters/football-ch-1.png';
import character2 from '../../assets/img-sejarah/footbal-characters/football-ch-2.png';
import character3 from '../../assets/img-sejarah/footbal-characters/football-ch-3.png';
import character4 from '../../assets/img-sejarah/footbal-characters/football-ch-4.png';
import BackgroundTanah from '../../components/BackgroundTanah';
import BackgroundAwan from '../../components/BackgroundAwan';
import ArrowUp from '../../components/ArrowUp';

const FootballHistory = () => {
  const dataHistory = [
    {
      date: '1893',
      desc: 'Sepak bola diperkenalkan pertama kali di Indonesia oleh orang-orang Belanda pada masa penjajahan kolonial. Olahraga ini dimainkan terutama oleh komunitas kolonial Belanda.',
      img: character1,
    },
    {
      date: '1930',
      desc: 'Pada masa tersebut PSSI atau Persatuan Sepakbola Seluruh Indonesia terbentuk. Persatuan tersebut terbentuk di Yogyakarta. Organisasi ini bertujuan mengelola dan mengembangkan sepak bola di Indonesia',
      img: character2,
    },
    {
      date: '1951',
      desc: 'Setelah kemerdekaan Indonesia, PSSI secara resmi mengadakan kompetisi yang diberi nama Kejuaraan Nasional (Kejurnas) PSSI. Kompetisi tertua di Indonesia ini telah mengalami banyak pergantian nama, mulai dari Divisi Utama Perserikatan, Galatama, Liga Indonesia, hingga kompetisi yang kita kenal sekarang ini, yaitu Liga 1.',
      img: character3,
    },
    {
      date: '1952 - 1954',
      desc: 'PSSI menjadi anggota FIFA atau Federasi Sepakbola Internasional tahun 1952. Sejak saat itu, PSSI menjadi anggota FIFA yang ke-41. Selanjutnya PSSI menjadi anggota AFC atau Asian Football Confederation pada tahun 1954.',
      img: character4,
    },
    {
      date: '1985',
      desc: 'Piala Perserikatan, kompetisi sepak bola terkemuka di Indonesia, diselenggarakan untuk terakhir kalinya pada tahun 1985. Kompetisi ini digantikan oleh Liga Indonesia yang lebih profesional.',
      img: character1,
    },
    {
      date: '1994',
      desc: 'Liga Indonesia dibentuk pada tahun 1994 sebagai kompetisi sepak bola profesional di Indonesia. Liga ini terdiri dari beberapa divisi dengan klub-klub dari berbagai daerah.',
      img: character2,
    },
    {
      date: '2008',
      desc: 'PSSI menyelenggarakan Liga Super Indonesia sebagai liga sepak bola profesional di Indonesia menggantikan divisi utama. Kompetisi ini diikuti oleh 18 klub dari berbagai daerah di Indonesia.',
      img: character3,
    },
    {
      date: '2011',
      desc: 'PSSI mengganti nama Liga Super Indonesia menjadi Liga Prima Indonesia. Kompetisi ini diikuti oleh 18 klub dari berbagai daerah di Indonesia.',
      img: character4,
    },
    {
      date: '2017 - sekarang',
      desc: 'Kompetisi sepak bola profesional tertinggi di indonesia, yaitu Indonesia Supear League (ISL) berganti nama menjadi liga 1 dibawah kepemimpinan ketua PSSI yang baru, Edy Rahmayadi.',
      img: character2,
    },
  ];

  return (
    <div className='sport-container'>
      <BackgroundAwan />
      <div className='sport-section'>
        <div className='sport-content-1' id='sport-data-football'>
          {dataHistory.map((experience, id, arr) => (
            <div key={id} className='sport-data-football'>
              {(id + 1) % 2 !== 0 && (
                <>
                  <div className='gambar-kiri'>
                    <img
                      src={experience.img}
                      alt='football character'
                      width='170'
                    />
                  </div>
                  <div className='simbol-wrapper'>
                    <div className='sport-rounder'>
                      <img src={bola} alt='bola' width='55' />
                    </div>
                    {id + 1 !== arr.length && (
                      <div className='sport-line'>
                        <img
                          src={tali}
                          alt='tali'
                          width='20'
                          className='line-football'
                        />
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
                  <div className='lambang-wrapper'>
                    <div className='sport-rounder'>
                      <img src={bola} alt='bola' width='55' />
                    </div>
                    <div className='sport-line'>
                      <img
                        src={tali}
                        alt='tali'
                        width='20'
                        className='line-football'
                      />
                    </div>
                  </div>
                  <div className='gambar-kiri'>
                    <img
                      src={experience.img}
                      alt='football character'
                      width='170'
                    />
                  </div>
                </>
              )}

              {id + 1 === arr.length && (id + 1) % 2 === 0 && (
                <div className=''>
                  <div className='sport-rounder'>
                    <img src={bola} alt='bola' width='40' />
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

export default FootballHistory;
