import React from 'react';
import '../../styles/history.css';
import tali from '../../assets/img-sejarah/tali.png';
import medali from '../../assets/img-sejarah/medali.png';
import obor from '../../assets/img-sejarah/obor.gif';
import bgSilat from '../../assets/img-sejarah/bg-silat.png';
import BackgroundTanah from '../../components/BackgroundTanah';
import ArrowUp from '../../components/ArrowUp';

const SilatHistory = () => {
  const dataExperience = [
    {
      date: 'Prasejarah',
      desc: 'Nenek moyang bangsa Indonesia mengembangkan cara pembelaan diri yang menirukan gerakan binatang di alam sekitar. Keterampilan bela diri suku-suku asli Indonesia berkembang melalui berburu dan berperang dengan menggunakan parang, perisai, dan tombak.',
      img: obor,
    },
    {
      date: '1100 - 2000 M',
      desc: 'Silat diturunkan secara lisan dan diwariskan dari guru ke murid. Beragam legenda mengenai asal mula silat, seperti legenda Minangkabau yang mengisahkan Datuk Suri Diraja menciptakan silek di Pariangan, Tanah Datar pada abad ke-11.Tokoh persilatan (pendekar) menjadi banggaan di setiap daerah, misalnya Prabu Siliwangi, Hang Tuah, Gajah Mada, dan Si Pitung.',
      img: obor,
    },
    {
      date: '1400 - 1900 M',
      desc: 'Penyebaran Islam di Nusantara pada abad ke-14 mempengaruhi perkembangan silat. Pencak silat diajarkan bersama-sama dengan pelajaran agama di surau atau pesantren. Silat menjadi bagian dari latihan spiritual dan budaya dalam beberapa suku bangsa di Indonesia.',
      img: obor,
    },
    {
      date: '1700 - 1900 M',
      desc: 'Silat digunakan sebagai ilmu beladiri dalam perjuangan melawan penjajah Belanda. Para pendekar seperti Panembahan Senopati, Sultan Agung, Pangeran Diponegoro, Teungku Chik di Tiro, Teuku Umar, Tuanku Imam Bonjol, Sabai Nan Aluih, Cut Nyak Dhien, dan Cut Nyak Meutia mengangkat senjata dalam perjuangan melawan penjajah.',
      img: obor,
    },
    {
      date: '1948 - 1980 M',
      desc: 'Pada tanggal 18 Mei 1948, terbentuklah Ikatan Pencak Silat Indonesia (IPSI) sebagai organisasi pencak silat nasional pertama di Indonesia. Pada 11 Maret 1980, Persatuan Pencak Silat Antarbangsa (Persilat) didirikan atas prakarsa Eddie M. Nalapraya, dan Indonesia bersama Malaysia, Singapura, dan Brunei termasuk pendiri Persilat.',
      img: obor,
    },
    {
      date: '2000 M',
      desc: 'Silat diakui sebagai bagian dari budaya Suku Melayu dalam pengertian yang luas, mencakup penduduk pulau Sumatra, Semenanjung Malaka, Jawa, Bali, Kalimantan, Sulawesi, dan pulau-pulau lainnya yang menggunakan bahasa Melayu. Pencak silat menjadi tak terpisahkan dari upacara adat dan kesenian masyarakat di berbagai daerah.',
      img: obor,
    },
    {
      date: 'Saat ini',
      desc: 'Perguruan-perguruan silat tumbuh di Amerika Serikat dan Eropa. Silat diakui sebagai cabang olahraga dalam pertandingan internasional, khususnya dipertandingkan dalam ajang SEA Games.',
      img: obor,
    },
  ];

  return (
    <div className='sport-container'>
      <img src={bgSilat} alt='bg-silat' className='bg-silat' />
      <div className='sport-section'>
        <div className='sport-content-1 sport-content-silat' id='sport-silat'>
          {dataExperience.map((experience, id, arr) => (
            <div key={id} className='sport-data sport-data-silat '>
              {(id + 1) % 2 !== 0 && (
                <>
                  <div className='gambar-kiri'>
                    <img src={experience.img} alt='torch' width='55' />
                  </div>
                  <div className='lambang-wrapper-silat'>
                    <div className='sport-medal'>
                      <img src={medali} alt='medali' width='55' />
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
                  <div className='lambang-wrapper-silat'>
                    <div className='sport-medal'>
                      <img src={medali} alt='medali' width='55' />
                    </div>
                    <div className='sport-line'>
                      <img src={tali} alt='tali' width='20' />
                    </div>
                  </div>
                  <div className='gambar-kiri'>
                    <img src={experience.img} alt='torch' width='55' />
                  </div>
                </>
              )}

              {id + 1 === arr.length && (id + 1) % 2 === 0 && (
                <div className=''>
                  <div className='sport-medal'>
                    <img src={medali} alt='medali' width='40' />
                  </div>
                </div>
              )}

              <div key={id} className='data-item-sm'>
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

export default SilatHistory;
