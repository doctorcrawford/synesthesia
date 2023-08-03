import { ThreeCanvas } from './three/ThreeCanvas'
import Header from './Header';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AudioPlayer from './audio/AudioPlayer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <AudioPlayer />
        <Routes>
          <Route path='/synesthesia' element={<ThreeCanvas />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;