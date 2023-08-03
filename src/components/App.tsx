import { ThreeCanvas } from './three/ThreeCanvas'
import Header from './Header';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Audio from './audio/Audio';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <Audio />
        <Routes>
          <Route path='/' element={<ThreeCanvas />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;