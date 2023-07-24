import React from 'react';
import {
  rootPath,
  homePath,
  sportsPath,
  soccerPath,
  silatPath,
  chessPath,
  eSportsPath,
  aboutUsPath,
  badmintonPath,
  weightLiftingPath,
  referencePath,
} from './routes';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import AppHeader from "./components/AppHeader";
import Sports from './pages/Sports';
import SoccerPage from './pages/SoccerPage';
import SilatPage from './pages/SilatPage';
import ChessPage from './pages/ChessPage';
import ESportsPage from './pages/ESportsPage';
import AboutUsPage from './pages/AboutUsPage';
import BadmintonPage from './pages/BadmintonPage';
import WeightLiftingPage from './pages/WeightLiftingPage';
import ReferencePage from './pages/ReferencePage';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className='App'>
      <main>
        <Routes>
          {[rootPath, homePath].map((path, index) => (
            <Route path={path} element={<Home />} key={index} />
          ))}
          <Route path={sportsPath} element={<Sports />} />
          <Route path={soccerPath} element={<SoccerPage />} />
          <Route path={silatPath} element={<SilatPage />} />
          <Route path={chessPath} element={<ChessPage />} />
          <Route path={eSportsPath} element={<ESportsPage />} />
          <Route path={aboutUsPath} element={<AboutUsPage />} />
          <Route path={badmintonPath} element={<BadmintonPage />} />
          <Route path={weightLiftingPath} element={<WeightLiftingPage />} />
          <Route path={referencePath} element={<ReferencePage />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
