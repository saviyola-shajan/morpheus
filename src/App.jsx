import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const AdFilm = lazy(() => import('./pages/AdFilm'));
const BehindTheScenes = lazy(() => import('./pages/BehindTheScenes'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div style={{color:"white"}}>Loading...</div>}>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/adfilms' element={<AdFilm />} />
          <Route path='/behindthescenes' element={<BehindTheScenes />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
