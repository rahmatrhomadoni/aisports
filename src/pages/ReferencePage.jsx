import React from 'react';
import AppHeader from '../components/AppHeader';
import tanah from '../assets/img-background/tanah.png';

function ReferencePage() {
  return (
    <div className='reference-page'>
      <AppHeader />
      <div className='reference'>
        <div className='reference-container'>
          <h3>Referensi Sumber Olah Data</h3>
          <div className='reference-list-container'>
            <ul>
              <li>
                "Badminton Association of Indonesia (PBSI)" - PBSI Website:
                <br />
                <a href='https://pbsi.id/' target='_blank' rel='noreferrer'>
                  https://pbsi.id/
                </a>
              </li>
              <li>
                "Asal Usul dan Sejarah Bulu Tangkis di Indonesia Lengkap" -
                Sportstars:
                <br />
                <a
                  href='https://www.sportstars.id/read/asal-usul-dan-sejarah-bulu-tangkis-di-indonesia-lengkap-Y02B2j'
                  target='_blank'
                  rel='noreferrer'
                >
                  https://www.sportstars.id/read/asal-usul-dan-sejarah-bulu-tangkis-di-indonesia-lengkap-Y02B2j
                </a>
              </li>
              <li>
                "Sejarah Catur Masuk Ke Indonesia" - CNN Indonesia:
                <br />
                <a
                  href='https://www.cnnindonesia.com/olahraga/20210414173849-178-629992/sejarah-catur-masuk-ke-indonesia'
                  target='_blank'
                  rel='noreferrer'
                >
                  https://www.cnnindonesia.com/olahraga/20210414173849-178-629992/sejarah-catur-masuk-ke-indonesia
                </a>
              </li>
              <li>
                "Sejarah Catur dan Prestasi Catur Indonesia" - Asumsi:
                <br />
                <a
                  href='https://www.asumsi.co/post/59998/sejarah-catur-dan-prestasi-pecatur-indonesia/'
                  target='_blank'
                  rel='noreferrer'
                >
                  https://www.asumsi.co/post/59998/sejarah-catur-dan-prestasi-pecatur-indonesia/
                </a>
              </li>
              <li>
                "Sejarah Esports di Indonesia" - VCGamers:
                <br />
                <a
                  href='https://www.vcgamers.com/news/sejarah-esports-di-indonesia/'
                  target='_blank'
                  rel='noreferrer'
                >
                  https://www.vcgamers.com/news/sejarah-esports-di-indonesia/
                </a>
              </li>
              <li>
                "Sejarah Esports di Indonesia dari Pertarungan Antarkota Hingga
                Jadi Juara Dunia" - Grid:
                <br />
                <a
                  href='https://games.grid.id/read/152270375/sejarah-esport-di-indonesia-dari-pertarungan-antar-kota-hingga-jadi-juara-dunia?page=all'
                  target='_blank'
                  rel='noreferrer'
                >
                  https://games.grid.id/read/152270375/sejarah-esport-di-indonesia-dari-pertarungan-antar-kota-hingga-jadi-juara-dunia?page=all
                </a>
              </li>
              <li>
                "Begini Sejarah Angkat Beban Olahraganya Para Ksatria" - Detik
                Sport:
                <br />
                <a
                  href='https://sport.detik.com/sport-lain/d-5686375/begini-sejarah-angkat-beban-olahraganya-para-ksatria'
                  target='_blank'
                  rel='noreferrer'
                >
                  https://sport.detik.com/sport-lain/d-5686375/begini-sejarah-angkat-beban-olahraganya-para-ksatria
                </a>
              </li>

              <li>
                "Mengenal Olahraga Angkat Besi" - KONI Bandung:
                <br />
                <a
                  href='http://koni-kotabandung.or.id/v2/mengenal-olahraga-angkat-besi/'
                  target='_blank'
                  rel='noreferrer'
                >
                  http://koni-kotabandung.or.id/v2/mengenal-olahraga-angkat-besi/
                </a>
              </li>
              <li>
                "Sejarah Pencak Silat Bela Diri Asal Nusantara Yang Mendunia" -
                Kumparan:
                <br />
                <a
                  href='https://kumparan.com/berita-terkini/sejarah-pencak-silat-bela-diri-asal-nusantara-yang-mendunia-1z33y3W10lw'
                  target='_blank'
                  rel='noreferrer'
                >
                  https://kumparan.com/berita-terkini/sejarah-pencak-silat-bela-diri-asal-nusantara-yang-mendunia-1z33y3W10lw
                </a>
              </li>
              <li>
                "Sejarah Pencak Silat" - Gramedia:
                <br />
                <a
                  href='https://www.gramedia.com/literasi/sejarah-pencak-silat/'
                  target='_blank'
                  rel='noreferrer'
                >
                  https://www.gramedia.com/literasi/sejarah-pencak-silat/
                </a>
              </li>
              <li>
                "Sejarah Sepak Bola Indonesia dari Masa Hindia Belanda Hingga
                Lahir PSSI" - Kontan:
                <br />
                <a
                  href='https://caritahu.kontan.co.id/news/sejarah-sepak-bola-indonesia-dari-masa-hindia-belanda-hingga-lahir-pssi?page=all'
                  target='_blank'
                  rel='noreferrer'
                >
                  https://caritahu.kontan.co.id/news/sejarah-sepak-bola-indonesia-dari-masa-hindia-belanda-hingga-lahir-pssi?page=all
                </a>
              </li>
              <li>
                "Sejarah Sepak Bola" - Gramedia:
                <br />
                <a
                  href='https://www.gramedia.com/literasi/sejarah-sepak-bola/'
                  target='_blank'
                  rel='noreferrer'
                >
                  https://www.gramedia.com/literasi/sejarah-sepak-bola/
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='reference-tanah-container'>
          <img src={tanah} alt='tanah' />
        </div>
      </div>
    </div>
  );
}

export default ReferencePage;
