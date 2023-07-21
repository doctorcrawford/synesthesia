import { ThreeCanvas } from './ThreeCanvas'
import Header from './Header';
import Navbar from './Navbar';
import SpotifySDK from './SpotifySDK';
// import WebPlayback from './WebPlayback';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
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