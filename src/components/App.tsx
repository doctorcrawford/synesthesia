import { ThreeCanvas } from './Three/ThreeCanvas'
import Header from './Header';
import Navbar from './Navbar';
// import SpotifySDK from './SpotifySDK';
// import WebPlayback from './WebPlayback';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Audio from './Audio';
import AudioInput from './AudioInput';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <AudioInput />
        <Audio />
        <Routes>
          <Route path='/' element={<ThreeCanvas />} />
          {/* <Route path='/spotify' element={<SpotifySDK />} /> */}
          {/* <Route path='/webplayback' element={<WebPlayback />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App;