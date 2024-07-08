import {Routes,Route,Navigate} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from "./pages/Home"
import About from './pages/About'
import AdFilm from './pages/AdFilm'
import BehindTheScenes from './pages/BehindTheScenes'
import Contact from './pages/Contact'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/adfilms' element={<AdFilm/>}/>
        <Route path='/behindthescenes' element={<BehindTheScenes/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
